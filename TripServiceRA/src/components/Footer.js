import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { HOME_ICON, FRIENDS_ICON, MOTOR_ICON, CHAT_ICON, PROFILE_ICON } from '../image';
const footerText = [
    {
        icon: HOME_ICON,
        text: 'Trang chủ',
    },
    {
        icon: FRIENDS_ICON,
        text: 'Bạn bè',
    },
    {
        icon: MOTOR_ICON,
        text: 'Phượt',
    },
    {
        icon: CHAT_ICON,
        text: 'Tin nhắn',
    },
    {
        icon: PROFILE_ICON,
        text: 'Cá nhân'
    },

]
const Footer = (props) => {
    return (
        <View style={styles.bottomContainer}>
            {footerText.map((p, i) => (
                <View key={i}style={styles.icon}>
                    <Image
                        style={styles.image}
                        source={p.icon}></Image>
                    <Text style={[{ fontWeight: 'bold' }, props.id == i ? styles.greenText : {}]} >{p.text}</Text>
                </View>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    greenText: {
        color: '#009387'
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: "row",
        alignContent: "space-around",

        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#009387',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1.5,
        // marginLeft: ,
        // marginRight: 5,
        marginTop: 10,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        marginLeft: 15,
        marginRight: 15,
    }
});
export default Footer;