import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (nome, sobrenome) =>{
  return nome + ' ' + sobrenome;
}

const Cat = () => {
  
  return <Text>Hello, I am {getNomeCompleto('Xana', 'trindade').toUpperCase()}</Text>
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
      <Cat/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
