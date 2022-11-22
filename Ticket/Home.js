import { BottomSheetAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Menu from './Menu';

const Home = props => {
  return (
    <View style={styles.container}>
      <Image
        style={StyleSheet.globologo}
        source={require('../Ticket/images/_Export_globoticket-bug-black.png')}
      />
      <Text style={styles.title}>Welcome to GloboTicket</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <Image
        style={styles.heroimage}
        source={require('../Ticket/images/boxing.jpg')}
      />
      <Text style={styles.textcontainer}>
        <Text style={styles.content}>{introText}</Text>
      </Text>
      <View style={styles.menu}>
        <Menu>
        
        </Menu>
      </View>
    </View>
  );
};

const introText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged.`;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
  },
  textcontainer: {
    padding: 20,
  },
  globologo: {
    height: 100,
    width: 150,
  },
  title: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: '700',
  },
  subtitle: {
    paddingTop: 5,
    fontFamily: 'Ubuntu-Light',
    fontWeight: '500',
  },
  heroimage: {
    height: 170,
    width: '100%'
  },
  menu: {
    position: 'relative',
    bottom: 10
  }
});

export default Home;
