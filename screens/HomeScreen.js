import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Aplicativo!</Text>
      <Text style={styles.content}>
        Este é o aplicativo de exemplo para demonstração de navegação entre telas utilizando React Navigation.
      </Text>
      <Button title="Ir para Detalhes" onPress={() => navigation.navigate('Details')} />
      <Button title="Sobre o Desenvolvedor" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
  },
});
