import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <View style={styles.container}>
      {/* Adding the Image */}
      <Animatable.Image
        source={require('../new/splash.png')} // Local image (put your image in the assets folder)
        style={styles.logo}
        animation="zoomIn"
        duration={3000}
      />
      <Animatable.Text
        style={styles.title}
        animation="fadeInUpBig"
        duration={5000}
      >
       My Cart App
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cb4335', // Black background
  },
  logo: {
    width: 250, // Adjust the size of the image
    height: 250,
    marginBottom: 20, // Space between image and text
  },
  title: {
    fontSize: 36,
    color: 'black', // White text
    fontWeight: '600', // SemiBold font weight
  },
});

export default Splash;
