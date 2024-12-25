import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Provider as PaperProvider, Appbar, IconButton } from 'react-native-paper';

export default function App() {
  const [lkrAmount,setLkrAmount]=useState('');
  const [usdAmount,setUsdAmount]=useState('');
  const [loading,setLoading]=useState(false);
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
           placeholder="Enter amount"
          placeholderTextColor="#aaa"
         />

    < TouchableOpacity
            style={styles.button}
            onPress={convertCurrency}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Convert to USD</Text>
            )}
          </TouchableOpacity>

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
    backgroundColor: '#f4f4f4',
    paddingTop: 40,
  },
  appbar: {
    backgroundColor: '#6200ee',
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginTop: 20,
  },

});
