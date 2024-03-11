import { useState } from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const Calculadora = () => {
  const [parcela1, setParcela1] = useState(0);
  const [parcela2, setParcela2] = useState(0);
  const [soma, setSoma] = useState(0);
  return (
    <View style={{padding: 10}}>
        <TextInput keyboardType='number-pad' defaultValue={parcela1.toString()} onChangeText={(texto) => setParcela1(Number(texto))} />
        <TextInput keyboardType='number-pad' defaultValue={parcela2.toString()} onChangeText={(texto) => setParcela2 (Number(texto))} />

        <Button title='SOMAR' onPress={() => setSoma (parcela1 + parcela2)}/>
        
        <Text >
            Soma: {soma}
        </Text>
    </View>
  );
};

export default Calculadora;