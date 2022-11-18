import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Home = props => {
  return (
    <View>
      <Image
        style={StyleSheet.globologo}
        source={require('./images/ticket_background.png')}
      />
      <Text style={styles.title}>Welcome to GloboTicket</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <Text style={styles.textcontainer}>
        <Text style={styles.content}>{introText}</Text>
      </Text>
    </View>
  );
};

const introText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
like Aldus PageMaker including versions of Lorem Ipsum`;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    textcontainer: {
        textAlign: 'center',
        paddingTop: 10
    },
    globologo: {
        height: 100,
        width:150
    },
    title: {
        fontFamily: 'Ubuntu-Regular'
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: 'Ubuntu-Light',
        fontWeight: '300'
    }
});

export default Home;
