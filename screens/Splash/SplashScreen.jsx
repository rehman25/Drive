import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import Carousel from './Carorsal'; // Corrected typo
import Paginator from './paginator';
import Data from './data';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index || 0); // Ensure to handle the case when viewableItems is empty
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current; // Corrected typo

  const slidesRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleNavigation = () => {
    navigation.navigate('LocationEnable');
  }
  return (
    <View style={styles.container}>
      <View style={{flex:0.09 ,alignItems:"flex-end"} }>
        <Text style={styles.SkipText} onPress={handleNavigation}>skip</Text>
      </View>
      <View style={{ flex: 3  }}>
        <FlatList
          data={Data}
          renderItem={({ item }) => <Carousel item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false} // Corrected typo
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id} // Ensure to convert id to string
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator 
        data={Data} 
          scrollX={scrollX}
      />
    </View>
  );
};



export default SplashScreen;



const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
    backgroundColor: 'white', // Example background color
  },
  SkipText:{
    fontSize:16,
    fontWeight:"600",
  }
});