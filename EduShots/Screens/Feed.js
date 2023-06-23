import { Layout } from '@ui-kitten/components'
import React, { useRef, useState,useEffect } from "react";
import { Camera, VideoQuality } from "expo-camera";
import { Button } from "@ui-kitten/components";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
export default function Feed({navigation}) {

  const cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState();

  const handleButtonPress = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
    setHasCameraPermission(cameraPermission.status === "granted");
    setHasMicrophonePermission(microphonePermission.status === "granted");
  };


  const handleStartRecordPress = async () => {
    setIsRecording(true);
    await cameraRef.current.recordAsync({quality: "360p"}).then((recordedVideo)=>{
      console.log(recordedVideo);
      setVideo(recordedVideo);
      setIsRecording(false);
    });
  };

  const handleStopRecordPress = async () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();

    
  };

  useEffect(() => {
    if (video) {
      navigation.navigate("UploadVideo", { videoURI: video });
    }
  }, [video, navigation]);


  if (!hasCameraPermission || !hasMicrophonePermission) {
    return (
      <Button style={styles.button} onPress={handleButtonPress}>
        Camera
      </Button>
    );
  }


  return (
    <Layout style = {{flex: 1, flexDirection: 'row'}}>
        <Layout style = {{borderWidth: 1, height: "85%", marginTop: "20%", width: "85%"}}>
        <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef} />
        <Button style={styles.button} onPress={isRecording?handleStopRecordPress:handleStartRecordPress}>{isRecording?"Stop Recording":"Record Video"}</Button>
        </Layout>
        <Layout style = {{marginTop: 320, marginLeft: 10}}>
        <AntDesign name="like1" size={40} color="black" style = {{marginBottom: 30}}/>
        <AntDesign name="questioncircle" size={40} color="black" style = {{marginBottom: 30}}/>
        <MaterialIcons name="report-problem" size={40} color="black" />
        </Layout>
        </Layout>
  )
}

const styles = {
  camera: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
};