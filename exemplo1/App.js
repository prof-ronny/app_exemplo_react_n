import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (<>
      <StatusBar  backgroundColor='#999' />
      <SafeAreaView style={styles.container }   >
        
      <Text style={styles.estiloTexto}>Open up App.js to start working on your app!</Text>
      <Text style={styles.estiloTexto}> Meu Primeiro App </Text>
      
      </SafeAreaView>
      </>
      
      
      
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 35
  },
  estiloTexto:{
    fontSize: 30,
    color: '#000',
    fontWeight: '800',
  }
});
