import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Categories from '../components/Categories';
import Carousels from '../components/Carousels';
import Services from '../components/Services';
import Deals from '../components/Deals';
import Brand from '../components/Brand';

const HomeScreen = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <Header />
      <Subheader />
      <Categories />
      <Carousels />
      <Services />
      <Deals />
      <Brand />
    </ScrollView>
  );
};

export default HomeScreen;
