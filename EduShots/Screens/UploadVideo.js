import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FIREBASE_STORAGE } from '../firebaseConfig';
import { Button, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";

const UploadVideo = ({ route, navigation }) => {
  const { videoURI } = route.params;

  const data = ['Science', 'Commerce', 'Arts'];

  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const [metadata, setMetadata] = useState({});
  const displayValue = data[selectedIndex.row];
  const renderOption = (title) => <SelectItem title={title} />;

  const handleUploadButton = async () => {
    const auth = FIREBASE_AUTH;

    const response = await fetch(videoURI.uri);
    const blob = await response.blob();
    const filename = videoURI.uri.split('/').pop();
    const storageRef = ref(FIREBASE_STORAGE, `${displayValue}/${filename}`);

    
    const user = auth.currentUser;
    const doubts = ['doubt1', 'doubt2', 'doubt3'];
    const uploadTask = uploadBytesResumable(storageRef, blob, {customMetadata:{ likes: 0, doubts:JSON.stringify(doubts), uploader: user.uid }});

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% complete`);
      },
      (error) => {
        console.error('Failed to upload video', error);
      },
      () => {
        console.log('Video upload completed');
      }
    );
  };

  return (
    <View style={styles.container}>
      <Select
        label={'Domain'}
        style={{ width: 200 }}
        placeholder="Select Domain"
        value={displayValue}
        size="large"
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        status="primary"
      >
        {data.map(renderOption)}
      </Select>

      <View style={styles.uploadContainer}>
        <Button style={styles.uploadButton} onPress={handleUploadButton}>
          Upload
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  uploadButton: {
    width: 200,
  },
});

export default UploadVideo;
