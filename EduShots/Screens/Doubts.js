import { Layout, Text, Input, InputProps, Button } from '@ui-kitten/components'
import { useState } from 'react';
import React from 'react'

export default function Doubts() {

  


  return (
    <Layout style = {{flex: 1, justifyContent: "center", margin: 10, padding: 10}}>
        <Text category='h2' style = {{textAlign: "center"}}>Doubts</Text>

      <Layout style = {{marginVertical: 20}}>

      
        <Input
          label={"Doubts"}
          size='large'
          
          placeholder="Ask you doubt..."
          multiline={true}
          textStyle = {{minHeight: 60, justifyContent:'flex-start'}}
          
      />
      </Layout>

      <Layout style ={{width: 100, alignSelf: "flex-end"}}>
        <Button>Ask</Button>
      </Layout>
    </Layout>
  )
}
