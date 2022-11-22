import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet, Alert} from 'react-native';

const Contact = ({navigation}) => {
  const [formName, setFormName] = useState('Enter name');
  const [formEmail, setFormEmail] = useState('Enter email');
  const [formPhoneNumber, setFormPhoneNumber] = useState('Enter Phone Number');
  const [formMessage, setFormMessage] = useState(
    "Let us know what's on your mind",
  );

  const submit = () => {
    if (!formName || !formEmail || !formMessage) {
      Alert.alert('Please enter info in all required fields');
    } else {
      Alert.alert(`Thank you ${formName}`);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.labels}>Name: *required</Text>
      <TextInput
        style={styles.txtinput}
        onChangeText={name => setFormName(name)}
        value={formName}
        autoCapitalize="words"
        selectTextOnFocus={true}></TextInput>
      <Text style={styles.labels}>Email: *required</Text>
      <TextInput
        style={style.txtinput}
        onChangeText={email => setFormEmail(email)}
        value={formEmail}
        selectTextOnFocus={true}></TextInput>
      <Text style={styles.labels}>Phone:</Text>
      <TextInput
        style={style.txtinput}
        onChangeText={phone => setFormPhoneNumber(phone)}
        value={formPhoneNumber}
        selectTextOnFocus={true}></TextInput>
      <Text style={styles.labels}>Message:</Text>
      <TextInput
        style={styles.multitxtinput}
        onChangeText={(message = setFormMessage(message))}
        value={formMessage}
        multiline={true}
        numberOfLines={3}
        selectTextOnFocus={true}></TextInput>
      <Button title="Contact us" color="#708090" onPress={submit}></Button>
    </View>
  );

};


const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        flexDirection: 'column',
        padding: 18
    },
    txtInput: {
        borderWidth: 1,
        fontFamiliy: 'Ubuntu-Regular',
        width: '80%',
        paddingBottom: 15
    },
    multitxtinput: {
        borderWidth: 1,
        fontFamily: 'Ubuntu-Regular',
        width: '90%',
        height: 120,
        marginBottom: 50
    },
    labels: {
        fontFamily: 'Ubuntu-Regular'
    }
});

export default Contact;