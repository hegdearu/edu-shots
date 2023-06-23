import { Layout } from '@ui-kitten/components'
import React, { useRef, useState,useEffect } from "react";
import { Camera, VideoQuality } from "expo-camera";
import { Button } from "@ui-kitten/components";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
export default function Feed({navigation}) {

  
  const handleRecord = () => {
    navigation.navigate('RecordVideo')
  };

  return (
    <Layout style = {{flex: 1, flexDirection: 'row'}}>
        <Layout style = {{borderWidth: 1, height: "85%", marginTop: "20%", width: "85%"}}>
        <Button style={styles.button}   onPress={handleRecord}>Add</Button>
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