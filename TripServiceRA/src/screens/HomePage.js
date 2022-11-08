import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground,
    Image,
    Modal
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';

// import { useTheme } from 'react-native-paper';


const HomePage = () => {
    return (
        <ImageBackground 
            source={require('../../asset/Home_background.jpg')} 
            resizeMode="cover" 
            style={styles.image}>
                <View style = {styles.view1}>
                    <View style = {styles.view4}>
                        <Image
                            style = {styles.SignInButton} 
                            source = {require('../../asset/SignIn.png')}
                        />
                    </View>
                    <View style = {styles.view5}>
                        <Image
                            style = {styles.MenuButton} 
                            source = {require('../../asset/Option_menu.png')}
                        />
                    </View>
                </View>
                <View style = {styles.view2}> 
                    <View style = {styles.view7}> 
                        <Text style={styles.Trip}> Trip</Text>      
                        <Text style={styles.Slogan}> Enjoy </Text>        
                        <Text style={styles.Slogan}> your journey </Text>
                    </View>
                    <View style = {styles.view6}> 
                    <Image
                            style = {styles.friendButton} 
                            source = {require('../../asset/friends.png')}
                        />
                    </View>
                </View>
                <View style = {styles.view3}>   
                    <Image
                            style = {styles.friendButton} 
                            source = {require('../../asset/Add_button.png')}
                        />    
                    <Image
                            style = {styles.MotorButton} 
                            source = {require('../../asset/Motorbike_icon1.png')}
                        />  
                    <Image
                            style = {styles.friendButton} 
                            source = {require('../../asset/notification.png')}
                        />                           
                </View>
        </ImageBackground>
    );
    
};


const styles = StyleSheet.create({
    body: {
        flex:1,
        flexDirection:'column',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        
      },
    Text: {
        color:'#00ffff',
        alignItems:'center',
    },
    view1:{
        flexDirection:'row',
        flex: 1,

    },
    view2:{
        flex: 3,
    },
    view3:{
        flex: 1.5,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection:'row',
    },
    view4:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'flex-start',
        marginLeft: 30,
    },
    view5:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'flex-end',
        marginRight: 30,
    },

    view6:{
        flex: 3,
        justifyContent: 'flex-end',
        alignItems:'flex-start',
        marginLeft: 30,
    },
    view7:{
        flex: 3,
        justifyContent: 'flex-start',
        alignItems:'center',
    },

    SignInButton:{
        width: 70,
        height: 75,
        resizeMode: 'stretch',
    },
    MenuButton:{
        width: 75,
        height: 75,
        resizeMode: 'stretch',
    },
    friendButton:{
        width: 75,
        height: 75,
        resizeMode: 'stretch',
    },
    MotorButton:{
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    },
    Trip:{
        fontSize: 70,
        color:'#BE5E0B',
        fontStyle:'italic',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
    Slogan:{
        fontSize: 30,
        color:'#0031AE',
        fontStyle:'italic',
    },
  });

export default HomePage;