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
        <View style ={styles.Body}>
            <View style ={styles.Header}>
                <Text style={styles.textTitle}> Name of Journey </Text>
            </View>
            <View style ={styles.Description}>   
                <View style ={styles.ViewFlag}>
                </View>
                <Text style={styles.iconList}> Design </Text>
                <Text style={styles.CheckpointName}> Destination </Text>
                <Text style={styles.Distance}> SumDistance </Text>
            </View>
             
            <ScrollView
            style ={styles.ListDestination}>
                <View style ={styles.DescriptionList}>
                    <View style ={styles.ViewFlag}>
                        <Image
                            style = {styles.friendButton} 
                            source = {require('../../asset/start_icon.png')}
                        /> 
                    </View>
                    <View style={styles.iconList}> 
                        <Image
                            style = {styles.designbutton} 
                            source = {require('../../asset/edit_button.png')}
                        /> 
                        <Image
                            style = {styles.designbutton} 
                            source = {require('../../asset/Minus.png')}
                        /> 
                    </View>
                    <Text style={styles.CheckpointName}> Name </Text>
                    <Text style={styles.Distance}> +1000 </Text>
                </View>
                
                <View style ={styles.DescriptionList}>
                    <View style ={styles.ViewFlag}>
                        <Image
                            style = {styles.friendButton} 
                            source = {require('../../asset/flag.png')}
                        /> 
                    </View>
                    <View style={styles.iconList}> 
                        <Image
                            style = {styles.designbutton} 
                            source = {require('../../asset/edit_button.png')}
                        /> 
                        <Image
                            style = {styles.designbutton} 
                            source = {require('../../asset/Minus.png')}
                        /> 
                    </View>
                    <Text style={styles.CheckpointName}> Name </Text>
                    <Text style={styles.Distance}> +1000 </Text>
                </View>
                <View style ={styles.DescriptionList}>
                    <View style ={styles.ViewFlag}>
                        <Image
                            style = {styles.friendButton} 
                            source = {require('../../asset/flag.png')}
                        /> 
                    </View>
                    <View style={styles.iconList}> 
                        <Image
                            style = {styles.designbutton} 
                            source = {require('../../asset/edit_button.png')}
                        /> 
                        <Image
                            style = {styles.designbutton} 
                            source = {require('../../asset/Minus.png')}
                        /> 
                    </View>
                    <Text style={styles.CheckpointName}> Name </Text>
                    <Text style={styles.Distance}> +1000 </Text>
                </View>
                <View style ={styles.DescriptionList}>
                    <View style ={styles.ViewFlag}>
                        <Image
                            style = {styles.friendButton} 
                            source = {require('../../asset/flag.png')}
                        /> 
                    </View>
                    <View style={styles.iconList}> 
                        <Image
                            style = {styles.designbutton} 
                            source = {require('../../asset/edit_button.png')}
                        /> 
                        <Image
                            style = {styles.designbutton} 
                            source = {require('../../asset/Minus.png')}
                        /> 
                    </View>
                    <Text style={styles.CheckpointName}> Name </Text>
                    <Text style={styles.Distance}> +1000 </Text>
                </View>
                <View style ={styles.DescriptionList}>
                    <View style ={styles.ViewFlag}>
                        <Image
                            style = {styles.friendButton} 
                            source = {require('../../asset/flag.png')}
                        /> 
                    </View>
                    <View style={styles.iconList}> 
                        <Image
                            style = {styles.designbutton} 
                            source = {require('../../asset/edit_button.png')}
                        /> 
                        <Image
                            style = {styles.designbutton} 
                            source = {require('../../asset/Minus.png')}
                        /> 
                    </View>
                    <Text style={styles.CheckpointName}> Name </Text>
                    <Text style={styles.Distance}> +1000 </Text>
                </View>
                <View style ={styles.DescriptionList}>
                    <View style ={styles.ViewFlag}>
                        <Image
                            style = {styles.friendButton} 
                            source = {require('../../asset/finish.png')}
                        /> 
                    </View>
                    <View style={styles.iconList}> 
                        <Image
                            style = {styles.designbutton} 
                            source = {require('../../asset/edit_button.png')}
                        /> 
                        <Image
                            style = {styles.designbutton} 
                            source = {require('../../asset/Minus.png')}
                        /> 
                    </View>
                    <Text style={styles.CheckpointName}> Name </Text>
                    <Text style={styles.Distance}> +1000 </Text>
                </View>
                </ScrollView>
            
            <View style ={styles.ButtonView}>
                <View>
                    <Image
                            style = {styles.FriendListButton} 
                            source = {require('../../asset/memberlist.png')}
                        /> 
                    < Text style = {styles.textLeft}>
                        Partner List
                    </Text>
                </View>
                <View>
                    <Image
                            style = {styles.StartRaceButton} 
                            source = {require('../../asset/Motorbike_icon1.png')}
                        /> 
                    < Text style = {styles.textMiddle}>
                        Start race
                    </Text>
                </View>
                <View>
                    <Image
                            style = {styles.FriendListButton} 
                            source = {require('../../asset/Add_button.png')}
                        /> 
                    < Text style = {styles.textRight}>
                        Add More
                    </Text>
                </View>
            </View>
        </View>
    );
    
};


const styles = StyleSheet.create({
    Body: {
        backgroundColor:'#ffffff',
        flex: 1,
    },
    textTitle: {
        fontSize: 30,
        color:'#0031AE',
        fontStyle:'italic',
        fontWeight: 'bold',
    },
    Header: {
        backgroundColor:'#ffffff',
        height:120,
        justifyContent: 'center',
        alignItems:'center',
    },
    Description: {
        backgroundColor:'#A6C8F1',
        height:100,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:20,
        marginLeft:18,
        marginRight:18,
        height: 40,
        
        // alignItems:'center',
    },
    DescriptionList: {
        backgroundColor:'#FBE8D1',
        height:100,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:20,
        height: 20,
        // alignItems:'center',
    },
    ViewFlag: {
        flex: 1,
    },
    friendButton:{
        width: 40,
        height: 40,
        resizeMode: 'stretch',
    },
    FriendListButton:{
        width: 75,
        height: 75,
        resizeMode: 'stretch',
    },
    StartRaceButton:{
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    },
    designbutton:{
        width: 20,
        height: 20,
        resizeMode: 'stretch',
    },
    CheckpointName: {
        flex: 3,
        marginLeft: 5,
    },
    Distance: {
        flex: 2,
    },
    iconList:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    ListDestination: {
        backgroundColor:'#FBE8D1',
        flex: 5,
        flexDirection:'column',
        height:100,
        marginHorizontal: 20,
    },
    ButtonView: {
        backgroundColor:'#ffffff',
        height:200,
        flexDirection:'row',
        marginBottom: 75,
        alignItems:'flex-end',
        justifyContent:'space-around',
    },
    textLeft:{
        backgroundColor:'#ffffff',
        marginLeft:0,
    },
    textMiddle:{
        backgroundColor:'#ffffff',
        marginLeft:17,
    },
    textRight:{
        backgroundColor:'#ffffff',
        marginLeft:5,
    },

    
});
export default DestinationList;