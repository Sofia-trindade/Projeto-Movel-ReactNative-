import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (nome, sobrenome) =>{
  return nome + ' ' + sobrenome ;
}
const Cat = ({nome, sobrenome, idade}) => {
  // let texto = 'anos';
  // if(idade <= 1){
  //   texto = 'ano'
  // }
  const texto = (idade <= 1) ? 'ano' : 'anos'; //IF ternário
  
  return <Text>Olá, eu sou {getNomeCompleto(nome, sobrenome).toUpperCase()}, {idade} {texto}.</Text>
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
    <Cat nome="Black" sobrenome="write" idade={5}/>
      <Cat nome="Xaninha" sobrenome="ket" idade={1}/>
      <Cat nome="Oliver" sobrenome="broow" idade={9}/>

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
