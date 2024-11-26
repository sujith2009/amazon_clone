import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import banner1 from '../assets/banner/banner1.jpg';
import banner2 from '../assets/banner/banner2.jpg';
import banner3 from '../assets/banner/banner3.jpg';
import banner4 from '../assets/banner/banner4.jpg';

import React, {useRef} from 'react';
const {width} = Dimensions.get('window');
const images = [
  {
    id: 1,
    src: banner1,
  },
  {
    id: 2,
    src: banner2,
  },
  {
    id: 3,
    src: banner3,
  },
  {
    id: 4,
    src: banner4,
  },
];

const Carousels = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const currentIndex = useRef(0);
  // Handle image click to navigate to that position

  const handleNextImage = () => {
    if (currentIndex.current < images.length - 1) {
      currentIndex.current += 1;
      flatListRef.current.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
    }
  };

  return (
    <View>
      <View style={styles.container}>
        {/* Image Slider */}
        <FlatList
          ref={flatListRef}
          data={images}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          renderItem={({item}) => (
            <TouchableOpacity onPress={handleNextImage}>
              <Image source={item.src} style={styles.image} />
            </TouchableOpacity>
          )}
        />

        {/* Dots for Pagination */}
        <View style={styles.pagination}>
          {images.map((_, index) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];

            const dotScale = scrollX.interpolate({
              inputRange,
              outputRange: [0.8, 1.5, 0.8],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={index.toString()}
                style={[styles.dot, {transform: [{scale: dotScale}]}]}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Carousels;
const styles = StyleSheet.create({
  image: {
    width: width,
    height: 170,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
});
