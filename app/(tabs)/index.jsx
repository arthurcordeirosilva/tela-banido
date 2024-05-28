import React from 'react';
import { Image, Platform, StyleSheet, View, Text, TextInput, Button} from 'react-native';
import { useState } from 'react';
import { styles } from '@/constants/styles';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as toxicity from '@tensorflow-models/toxicity';

export default function HomeScreen() {
  require('@tensorflow/tfjs');
const toxicity = require('@tensorflow-models/toxicity');
  const [text, setText] = useState('');
  toxicity.load(threshold).then(model => {
    const sentences = ['you suck'];
  
    model.classify(sentences).then(predictions => {
  
      console.log(predictions);
    
    });
  });

  return (

   <View style={styles.container}
    >
      <ThemedView style={styles.titleContainer}>
        {/* <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave /> */}
      </ThemedView>
      <View style={styles.stepsis}>
        
      <Image
          source={require('@/assets/images/brunohenrique.webp')}
          style={styles.reactLogo}
          
        /><View>  <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={(newText) => setText(newText)}
      />

         <Button

  title="Learn More"
  color="#8b0000"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
      
      </View>
      </View>

  );
}
