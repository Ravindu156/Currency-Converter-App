import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import { Provider as PaperProvider,Appbar } from 'react-native-paper';

export default function App() {
  const [lkrAmount,setLkrAmount]=useState('');
  const [usdAmount,setUsdAmount]=useState('');
  const [loadimng,setLoading]=useState(false);
  const [error,setError]=useState('');

  //Fixed exchange rate: Rs.300
  const exchangeRate=300;


  const convertCurrency=()=>{
    setLoading(true);
    setError('');


    if(isNaN(lkrAmount) || lkrAmount <=0){
        setError('Please enter a valid amount');
        setLoading(flase);
        return;
    }


    //calculate the USD amount using the fixed rate
    const convertedAmount=(lkrAmount/exchangeRate).toFixed(2);
    setUsdAmount(convertedAmount);
    setLoading(false);
    


  };
  
  
  
  
  
  
  return (
    <View style={styles.container}>
      <Text>Hikka</Text>
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
