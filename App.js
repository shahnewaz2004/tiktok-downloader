import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Clipboard from 'expo-clipboard';
import { Video } from 'expo-av';
import axios from 'axios';
import styles from './style';
import Result from './Result';

import {
  SafeAreaView, 
  ActivityIndicator, 
  Text, 
  View, 
  TextInput,
  ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';


export default function App() {
  let [fontsLoaded] = useFonts({
     Poppins_400Regular,
     Poppins_500Medium,
  });

  const [url, setUrl] = useState('');
  const [Videos, setVideo] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
  const paste = async () => {
    const text = await Clipboard.getStringAsync();
    setUrl(text);
  };


  const fetch = () => {
    setLoading(prev => !prev);
    const options = {
      method: 'GET',
      url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
      params: {url, hd: '0'},
      headers: {
        'X-RapidAPI-Key': 'c4f8b73d69msh443e71c3cf19408p1c019ajsneb7678e085dc',
        'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setVideo([...Videos, response.data.data]);
      setLoading(prev => !prev);
    }).catch(function (error) {
      setLoading(prev => !prev);
      alert("Could't download");
    });
  }

  if(!fontsLoaded){
    return <ActivityIndicator size={40} style={{flex: 1, display: 'flex', alignSelf: 'center'}} />
  } else{
    return (
      <SafeAreaView>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Viddit</Text>
            <MaterialIcons name='history' size={25} color="gray" />
          </View>

          <View style={styles.inputContainer}>
            <TextInput value={url} onChangeText={value => setUrl(value)} style={styles.input} placeholder="Paste TikTok video link" />
            <Feather onPress={paste} style={styles.clipboard} name='clipboard' />
          </View>

          <View onStartShouldSetResponder={fetch} style={styles.button}>
           {
            isLoading &&
              <ActivityIndicator color='white' />
           }
           {
            !isLoading &&
             <Text style={styles.buttonText}>Download</Text>
           }
          </View>
            {
              Videos.length > 0 &&
                <ScrollView style={{height: '70%', marginTop: 30}} showsVerticalScrollIndicator={false}>
                  {
                    Videos.map((value, index) => <Result key={index} result={value} />)
                  }
                </ScrollView>
            }
        </View>
            {/* <Video ref={video} source={{uri: fetchedVideo}} useNativeControls isLooping style={{width: 300, height: 200}}/> */}
      </SafeAreaView>
    );
  }
}


