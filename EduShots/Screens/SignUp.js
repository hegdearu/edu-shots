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
    const [nameCaption, setNameCaption] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStatus, setPasswordStatus] = useState("primary")
    const [email, setEmail] = useState("")
    const [emailStatus, setEmailStatus] = useState("primary")
    const [passwordCaption, setPasswordCaption] = useState("");
    const [confirmPasswordCaption, setConfirmPasswordCaption] = useState("");
    const [confirmPasswordStatus, setConfirmPasswordStatus] = useState("basic")

    const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
    const displayValue = data[selectedIndex.row];
    const renderOption = (title) => <SelectItem title={title} />;

    const handlePress = () => {

        if(name.length < 5){
            setNameStatus("danger")
            setNameCaption("Enter full name")
        }
        else{
            setNameCaption("")
            setNameStatus("success")
        }
        if(password.length < 8){
            setPasswordStatus("danger")
            setPasswordCaption("Password must contain atleast 8 characters")
        }
        else{
            setPasswordStatus("success")
            setPasswordCaption("")
        }
        
        if(password !== confirmPassword){
            setConfirmPasswordStatus("danger");
            setConfirmPasswordCaption("Passwords do not match")
        }
        else{
            setConfirmPasswordStatus("success");
            setConfirmPasswordCaption("")
        }       
        
        console.log(displayValue)
    }    

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
                onChangeText ={(val) => setName(val)}                                     
                caption={nameCaption}
            />
            <Input
                style = {{marginHorizontal: 40, marginVertical: 5}}
                value= {email}
                label={"E-mail"}            
                size="large"
                placeholder='Enter your email'
                onChangeText ={(val) => setEmail(val)}
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
                onChangeText ={(val) => setPassword(val)}
                caption={passwordCaption}
                secureTextEntry
            />
            <Input
                style = {{marginHorizontal: 40, marginVertical: 5}}
                value= {confirmPassword}
                label={"Confirm Password"}            
                size="large"
                placeholder='Confirm your password'
                status= {confirmPasswordStatus}
                caption={confirmPasswordCaption}
                onChangeText ={(val) => setConfirmPassword(val)}
                secureTextEntry
            />
            <Layout style = {{marginTop: 20, marginHorizontal: 80}}>
                <Button onPress={handlePress} size='large'>Register</Button>
            </Layout>
            
        </Layout>
    </Layout>
  )
}
