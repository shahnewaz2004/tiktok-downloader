import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text, View, Image } from 'react-native';
import {useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import styles from './style';
  

function Result({result}) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular
     });

  return (
    <View style={styles.card}>
    <View style={{position: 'relative', width:'40%'}}>
      <Image style={styles.cover} source={{uri: result.origin_cover}} />
      <AntDesign name='play' style={styles.playIcon} />
    </View>

    <View style={{width: '60%', paddingLeft: 10, justifyContent: "space-between"}}>
     <Text style={{fontFamily: 'Poppins_400Regular', fontSize: 13}}>
       {result.title}
     </Text>
     <View style={{alignItems: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
        <Text style={{color: '#0984e3', paddingRight: 5}}>Download</Text>
        <MaterialIcons color='#0984e3' name='file-download' size={20} />
     </View>
    </View>
  </View>
  )
}

export default Result