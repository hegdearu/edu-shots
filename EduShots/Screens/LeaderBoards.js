import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Layout, Text, List, ListItem, Divider } from '@ui-kitten/components';

// Sample leaderboard data
const leaderboardData = [
  { id: 1, name: 'John Doe', score: 25 },
  { id: 2, name: 'Jane Smith', score: 20 },
  { id: 3, name: 'Mike Johnson', score: 18 },
  // Add more data as needed
];

const LeaderboardScreen = () => {
  const renderItem = ({ item, index }) => (
    <Layout>
        <ListItem
        title={<Text>{item.name}</Text>}
        accessoryLeft={<Text>{index + 1}. </Text>}
        accessoryRight={<Text>{item.score}</Text>}        
        />
        <Divider/>
        <Divider/>
    </Layout>
    
  );

  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Text category="h2" style = {{textAlign: "center"}}>Leaderboard</Text>
      </View>
      <Layout style = {{}}>
      <List
        data={leaderboardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 30
  },
  header: {
    marginBottom: 16,
  },
});

export default LeaderboardScreen;
