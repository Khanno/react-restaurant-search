import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image, useColorScheme} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam('id');

  const getResult = async id => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getResult(id)
  }, []);

  if(!result) {
    return null;
  } 

  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image 
            style={styles.image}
            source={{uri: item}} 
          />
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 100,
  }
});

export default ResultsShowScreen;