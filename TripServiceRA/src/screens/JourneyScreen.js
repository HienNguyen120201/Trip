import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Footer from '../components/Footer.js';

const JourneyScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={{
                flex: 2,
                backgroundColor: "#009387",
                alignItems: 'center',
                justifyContent: 'center'
            }}
                >
                <Text style={styles.text_header}>
                    Danh sách hành trình
                </Text>
            </View>
            <View style={{ flex: 9 }}></View>
            <View style={{ 
                flex: 2,}}
                >
                <Footer id="2"/>
            </View>
        </View>
    );
};

export default JourneyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
});
