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
   <PaperProvider>
   <View style={styles.container}>
     <Appbar.Header>
        <Appbar.Content title="Currency Converter"/>
     </Appbar.Header>

     <View style={styles.content}>
        <TextInput
          label="Enter amount in LKR"
          value={lkrAmount}
         onChangeText={setLkrAmount}
          keyboardType='numeric'
          style={styles.input}
         />

        <Button
          mode="contained"
          onPress={convertCurrency}
          loading={loading}
          style={styles.button}
        
        
        >Convert to USD</Button>


        {error ? (
          <Text style={styles.error}>{error}</Text>
        ):(
          <Text style={styles.result}>USD:{usdAmount}</Text>
        )}
     </View>
      
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:20,
  },
  content:{
    marginTop:20,

  },
  input:{
    marginBottom:20,
  },
  button:{
    marginBottom:20,
  },
  result:{
    fontSize:18,
    fontweight:'bold',
  },
  error:{
    color:'red',
    fontSize:16
  }

});
