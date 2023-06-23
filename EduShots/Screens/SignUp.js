import { Input, Layout, Text, Select, IndexPath, SelectItem, Button } from '@ui-kitten/components'
import React, { useState } from 'react'

export default function SignUp() {
    const data = [
        'Science',
        'Commerce',
        'Arts',
    ];

    const [name, setName] = useState("")
    const [nameStatus, setNameStatus] = useState("primary")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStatus, setPasswordStatus] = useState("primary")
    const [email, setEmail] = useState("")
    const [emailStatus, setEmailStatus] = useState("primary")

    const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
    const displayValue = data[selectedIndex.row];
    const renderOption = (title) => <SelectItem title={title} />;

    

  return (
    <Layout style = {{flex: 1, justifyContent: "center"}}>
        <Text category='h3' style = {{textAlign: "center"}}>Register</Text>
        
        <Layout style = {{margin: 10}}>
            <Input
                style = {{marginHorizontal: 40, marginVertical: 5}}
                value= {name}
                label={"Name"}           
                 size="large"
                placeholder='Enter your name'
                status= {nameStatus}
            />
            <Input
                style = {{marginHorizontal: 40, marginVertical: 5}}
                value= {email}
                label={"E-mail"}            
                size="large"
                placeholder='Enter your email'
                status= {emailStatus}
            />
            <Select
            label={"Domain"}
            style={{marginHorizontal: 40, marginVertical: 5}}
            placeholder='Select Domain'
            value={displayValue}
            size="large"
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
            status='primary'
          >
            {data.map(renderOption)}
          </Select>
            <Input
                style = {{marginHorizontal: 40, marginVertical: 5}}
                value= {password}
                label={"Password"}            
                size="large"
                placeholder='Enter your password'
                status= {passwordStatus}
            />
            <Input
                style = {{marginHorizontal: 40, marginVertical: 5}}
                value= {confirmPassword}
                label={"Confirm Password"}            
                size="large"
                placeholder='Confirm your password'
                status= {passwordStatus}
            />
            <Layout style = {{marginTop: 20, marginHorizontal: 80}}>
                <Button>Register</Button>
            </Layout>
            
        </Layout>
    </Layout>
  )
}
