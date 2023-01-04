import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      paddingVertical: 50,
      paddingHorizontal: 30
    },
  
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20
    },
  
    headerText: {
      fontSize: 20,
      fontFamily: 'Poppins_500Medium'
    },
  
    inputContainer: {
      borderWidth: 1,
      borderColor: '#ced6e0',
      borderRadius: 5,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center', 
    },
  
    input: {
     height: '100%',
     width: '85%',
     paddingHorizontal: 10,
     fontFamily: 'Poppins_400Regular'
    },
  
    clipboard: {
      fontSize: 22,
      color: '#ff6348',
      paddingLeft: 5,
    },
  
    button: {
      backgroundColor: '#ff6348',
      borderRadius: 5,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20
    },
  
    buttonText: {
      color: 'white',
      fontFamily: 'Poppins_500Medium',
      textTransform: 'uppercase',
    },
    
    card: {
        backgroundColor: 'white',
        width: '100%',
        borderWidth: 1,
        borderColor: '#e7e7e7',
        padding: 8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },

    cover: {
        width: '100%',
        height: 85,
        borderRadius: 5
    },

    playIcon: {
        fontSize: 30,
        color: 'white',
        position: 'absolute',
        top: '35%',
        left: '35%',
    }
});

export default styles;