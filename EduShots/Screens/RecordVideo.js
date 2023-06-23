import React, { useRef, useState,useEffect } from "react";
import { Camera, VideoQuality } from "expo-camera";
import { Button } from "@ui-kitten/components";

const RecordVideo = ({navigation}) => {
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
    <>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef} />
      <Button style={styles.button} onPress={isRecording?handleStopRecordPress:handleStartRecordPress}>{isRecording?"Stop Recording":"Record Video"}</Button>
    </>
  );
};

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

export default RecordVideo;
