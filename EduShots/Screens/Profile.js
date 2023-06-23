import React, { useState } from "react"
import { StyleSheet } from 'react-native';
import { Divider, Layout, Text } from '@ui-kitten/components';
import { Avatar } from '@ui-kitten/components';

const ProfilePage = () => {

    const[email,setEmail]=useState('padma4202gmail.com')
    const[domain,setDomain]=useState('Science')
    const[name,setName]=useState('Padma')
    const[description, setDesciption] = useState('hey, whassup')

  return (
    <Layout style={styles.container}>
        <Layout style = {{alignItems: 'center', padding: 20}}>
            <Layout style={styles.avatar}>
                <Avatar
                    style={{width: 170, height: 170, alignSelf: "center"}}
                    source={require('./user3.png')}
                    
                />
            </Layout>
            
            <Text style={styles.name}>{name}</Text>
            <Text style = {{fontSize: 20}}>{description}</Text>      
        </Layout>
        <Divider/>
        <Divider/>
        <Divider/>
        <Layout style = {{padding: 10, margin: 10}}>
            <Layout style = {{flexDirection: "row", margin: 10}}>
                <Text style = {{fontWeight: "700", fontSize: 20}}>Domain: </Text>
                <Text style = {{ fontSize: 20}}>{domain}</Text>
            </Layout>
            <Divider/>

            <Layout style = {{flexDirection: "row", margin: 10}}>
                <Text style = {{fontWeight: "700", fontSize: 20}}>E-mail:   </Text>
                <Text style = {{ fontSize: 20}}>{email}</Text>
            </Layout>
            <Divider/>

            <Layout style = {{flexDirection: "row", margin: 10}}>
                <Text style = {{fontWeight: "700", fontSize: 20}}>Rank:     </Text>
                <Text style = {{ fontSize: 20}}>79</Text>
            </Layout>
            <Divider/>

            <Layout style = {{flexDirection: "row", margin: 10}}>
                <Text style = {{fontWeight: "700", fontSize: 20}}>Points:   </Text>
                <Text style = {{ fontSize: 20}}>79</Text>
            </Layout>
            <Divider/>

            <Layout style = {{flexDirection: "row", margin: 10}}>
                <Text style = {{fontWeight: "700", fontSize: 20}}>Videos:  </Text>
                <Text style = {{ fontSize: 20}}>9</Text>
            </Layout>
            <Divider/>

        </Layout>
       
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 60,
  },
  avatar: {
    width: 200,
    height: 200,
    borderWidth: 2, 
    borderRadius: 100,
  },
  name: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default ProfilePage;
