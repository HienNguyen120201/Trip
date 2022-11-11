import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground,
    Image,
    Modal,
    ScrollView,
    Button,
    TouchableOpacity,
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';

// import { useTheme } from 'react-native-paper';


const DestinationList = () => {
    return (
        <View style ={styles.body}>
            <Text style={styles.text}> Hello </Text>
        </View>
    );
    
};


const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor:'#ffffff',
        justifyContent: 'center',
        alignItems:'center',
    },
    text: {
        color: '#00ffff'
    },
});
export default DestinationList;