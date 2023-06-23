import { Layout } from '@ui-kitten/components'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
export default function Feed() {
  return (
    <Layout style = {{flex: 1, flexDirection: 'row'}}>
        <Layout style = {{borderWidth: 1, height: "85%", marginTop: "20%", width: "85%"}}>
          {/* //video layout */}
        </Layout>
        <Layout style = {{marginTop: 320, marginLeft: 10}}>
        <AntDesign name="like1" size={40} color="black" style = {{marginBottom: 30}}/>
        <AntDesign name="questioncircle" size={40} color="black" style = {{marginBottom: 30}}/>
        <MaterialIcons name="report-problem" size={40} color="black" />
        </Layout>
        </Layout>
  )
}
