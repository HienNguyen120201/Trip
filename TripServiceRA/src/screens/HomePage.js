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


const HomePage = () => {
    return (
        <View style = {styles.body}>
                <View style = {styles.view1}>
                    
                    <View style = {styles.view4}>
                        <TouchableOpacity>
                        <Image
                            style = {styles.SignInButton} 
                            source = {require('../../asset/SignIn.png')}                            
                        />            
                        <Text style = {styles.LeftText} >Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.view5}>
                    <TouchableOpacity>
                        <Image
                            style = {styles.MenuButton} 
                            source = {require('../../asset/Option_menu.png')}
                        />
                        <Text style = {styles.MenuText} >Menu</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                    <View style = {styles.view7}> 
                        <Text style={styles.Trip}> Bảng tin</Text>     
                    </View>
                    <View style = {styles.view2}> 
                    <ScrollView 
                        style = {styles.Feeds}
                        horizontal= {true}
                        pagingEnabled = {true}>   
                        <View>
                        <Image 
                            style = {styles.image} 
                            source = {require('../../asset/Home_background.jpg')}
                            resizeMode = 'contain'
                            />
                        <Button 
                            title='More Detail'
                            style = {styles.NewsButton}></Button>
                        </View>
                        
                        <View>
                        <Image 
                            style = {styles.image} 
                            source = {require('../../asset/Home_background.jpg')}
                            resizeMode = 'contain'
                            />
                        <Button 
                            title='More Detail'
                            style = {styles.NewsButton}></Button>
                        </View>

                        <View>
                        <Image 
                            style = {styles.image} 
                            source = {require('../../asset/Home_background.jpg')}
                            resizeMode = 'contain'
                            />
                        <Button 
                            title='More Detail'
                            style = {styles.NewsButton}></Button>
                        </View>

                        <View>
                        <Image 
                            style = {styles.image} 
                            source = {require('../../asset/Home_background.jpg')}
                            resizeMode = 'contain'
                            />
                        <Button 
                            title='More Detail'
                            style = {styles.NewsButton}></Button>
                        </View>
                        
                    </ScrollView>
                    </View>
                <View style = {styles.view6}> 
                    <TouchableOpacity>
                    <Image
                            style = {styles.friendButton} 
                            source = {require('../../asset/friends.png')}
                        />
                    <Text style = {styles.LeftText} >Bạn bè</Text>   
                    </TouchableOpacity> 
                </View>
                <View style = {styles.view3}>   
                    <View>
                        <TouchableOpacity>
                            <Image
                                style = {styles.friendButton} 
                                source = {require('../../asset/message.png')}
                           /> 
                            <Text style = {styles.MassageText} >Tin nhắn</Text> 
                        </TouchableOpacity>
                       </View> 
                        <View> 
                        <TouchableOpacity> 
                        <Image
                                style = {styles.MotorButton} 
                                source = {require('../../asset/Motorbike_icon1.png')}
                            />  
                            <Text style = {styles.CenterText} >Bắt đầu</Text> 
                        </TouchableOpacity>
                        </View>
                    <View> 
                    <TouchableOpacity>
                    <Image
                            style = {styles.friendButton} 
                            source = {require('../../asset/notification.png')}
                        /> 
                        <Text style = {styles.NotifyText}>Thông báo</Text> 
                    </TouchableOpacity>
                    </View>       
                </View>
            </View>
    );
    
};


const styles = StyleSheet.create({
    body: {
        flex:1,
        color:'#ffffff',
        flexDirection:'column',
    },
    image: {
        width: 395,
        height: 200,
      },
    Text: {
        color:'#00ffff',
        alignItems:'center',
    },
    LeftText: {
        color:'#000000',
        alignItems:'center',
        marginLeft: 15,
    },
    MassageText: {
        color:'#000000',
        alignItems:'center',
        marginLeft: 10,
    },
    CenterText: {
        color:'#000000',
        alignItems:'center',
        marginLeft: 25,
    },
    MenuText: {
        color:'#000000',

        marginLeft: 17,
    },
    NotifyText: {
        color:'#000000',

        marginLeft: 4,
    },

    NewsButton:{
        justifyContent: 'center',
    }, 

    view1:{
        flexDirection:'row',
        flex: 2,
    },
    view2:{
        flex: 5,
    },
    view3:{
        flex: 1.5,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'space-between',
        alignItems:'flex-end',
        flexDirection:'row',
        marginBottom: 30,
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
        flex: 2,
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        marginLeft: 30,
    },
    view7:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems:'center',
    },
    Feeds: {
        flex:5,
        color:'#ffffff',    
        marginBottom:50,
    },
    news:{
        backgroundColor: '#00ffff',
        height : 50,
        width: 50,
        marginLeft: 30,
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
        fontSize: 30,
        color:'#BE5E0B',
        fontStyle:'italic',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    Slogan:{
        fontSize: 30,
        color:'#0031AE',
        fontStyle:'italic',
    },
  });

export default HomePage;