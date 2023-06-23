import React, { useState } from 'react';
import { View, Text, Button,} from 'react-native';
import { Select, Input,IndexPath,SelectItem } from '@ui-kitten/components';


const data = [
    'spam or misleading',
    'voilent or repulsive content',
    'hateful or abusive content',
    'harmful or dangerous acts',
    'sexual content'
];


export default ReportPage = () => {
  const [selectedType, setSelectedType] = useState('');
  const [description, setDescription] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];
  const renderOption = (title) => <SelectItem title={title} />;


  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSubmit = () => {
    // Logic to submit the report
    console.log('Report submitted:', {
      type: selectedType,
      description: description,
    });
    // Reset the form
    setSelectedType('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Report</Text>
      <Select
            label={"Report Title"}
            style={styles.select}
            placeholder='type'
            value={displayValue}
            size="large"
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
          >
            {data.map(renderOption)}
          </Select>

      <Input
        label={"Report"}
        style={styles.input}
        multiline={true}
        placeholder="Enter description"
        textStyle={styles.inputTextStyle}
        value={description}
        onChangeText={handleDescriptionChange}
      />

      <Button title="Submit Report" onPress={handleSubmit} />
    </View>
  );
};

const styles = {
  container: {
    marginTop: 60,
    padding: 16,
    flex:1,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  select: {
    marginTop:50,
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    height: 120,
  },
  inputTextStyle: {
    minHeight: 64,
  },
  text:{
    fontSize: 40,
    textAlign: "center"

    
  }
};