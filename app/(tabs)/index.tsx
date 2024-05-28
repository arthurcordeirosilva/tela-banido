import React, { useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, View, Text, TextInput, SafeAreaView, Button, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '@/constants/styles';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as toxicity from '@tensorflow-models/toxicity';
import '@tensorflow/tfjs';

export default function HomeScreen() {
  const [valorText, setValorText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [textIsToxic, setTextIsToxic] = useState(false);
  const [model, setModel] = useState(null);
  const [flat, setflat] = useState([]);
  const threshold = 0.9;

  useEffect(() => {
    toxicity.load(threshold).then(loadedModel => {
      setModel(loadedModel);
      console.log('Toxicity model loaded');
    });
  }, []);

  const adiconarItem = async () => {
    setIsLoading(true);
    if (valorText.trim() !== '') {
      if (model) {
        const predictions = await model.classify([valorText]);
        let textIsToxicVar = false;
        
        predictions.forEach(prediction => {
          const match = prediction.results[0].match;
          if (match) {
            textIsToxicVar = true;
          }
        });

        if (textIsToxicVar) {
          setTextIsToxic(textIsToxicVar);
          setIsLoading(false);
          return;
        }

        setItems([...items, valorText]);
        setValorText('');
        setIsLoading(false);
      }
    }
  };

  if (textIsToxic) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.quadradoUsuario}>
          <View style={styles.infoUsuario}>
            <Image source={require('../../assets/images/download.jpg')} style={styles.iconeUsuario} />
            <Text style={styles.textoUsuario}>@bruno-henrique</Text>
          </View>
          <Text style={styles.textoAdicional}>You were banned</Text>
          <Text style={[styles.textoAdicional, styles.textoEspacado, styles.textoVermelho]}>
            "{valorText}"
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    
    <View style={styles.container}>
      {/* <Image src={require('../../assets/images/emoji.gif')} 
      style={styles.emoji} 
      /> */}
         {/* <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.teste}</Text>
          </View>
        )} */}
      <View style={styles.stepsis}>
        <Image
          source={require('@/assets/images/brunohenrique.webp')}
          style={styles.reactLogo}
        />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            value={valorText}
            onChangeText={setValorText}
          />
          <TouchableOpacity style={styles.bacon} onPress={adiconarItem}>
            <Text>Publicar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
