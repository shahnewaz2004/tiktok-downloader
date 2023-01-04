import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text, View, Image } from 'react-native';
import {useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import styles from './style';
  

function Result() {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular
     });

  return (
    <View style={styles.card}>
    <View style={{position: 'relative', width:'40%'}}>
      <Image style={styles.cover} source={{uri: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/324016687_518070150426241_5678882034367213650_n.jpg?stp=dst-jpg_s640x640&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF-RVN5WeXUmTRIUjvQULu54tniSgX0n3zi2eJKBfSffP80-nWn2RrmmmHzgUv_LgOtw0gYPdhRHN952ZFs1Y9N&_nc_ohc=XLqy36_Z_K8AX851i-2&_nc_ht=scontent.fzyl2-1.fna&oh=00_AfA8Gtwkvlaa45ujMg3u30lnkU9SjexCQf1ipi6G2l24qQ&oe=63BB594B'}} />
      <AntDesign name='play' style={styles.playIcon} />
    </View>

    <View style={{width: '60%', paddingLeft: 10, justifyContent: "space-between"}}>
     <Text style={{fontFamily: 'Poppins_400Regular', fontSize: 13}}>
        Here will be video title, you can make it short
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