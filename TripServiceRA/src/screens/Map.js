import {React , Component, useState, useEffect} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView, {PROVIDER_GOOGLE,Marker,MapViewDirections} from 'react-native-maps'
import {
  Pusher,
  PusherMember,
  PusherChannel,
  PusherEvent,
} from '@pusher/pusher-websocket-react-native';


const Map = () => {
    const [region, setRegion] = useState({
        latitude: 10.800841255712163,
        longitude: 106.65971765401387,
        latitudeDelta: 0.0001,
        longitudeDelta: 0.01,
      });
      const [message,setMessage] = useState("123");
      const pusher = Pusher.getInstance();
      
      useEffect(() => {
        pusher.init({
          apiKey: "9ce4abce09e857dc02f8",
          cluster: "ap1"
          });
        pusher.connect();
        var channel = pusher.subscribe({
        channelName: "text",
        onEvent : (event) => {
          if(event.eventName == "abcd")
          {
            setMessage(event.data)
          }
          
        }
      });
    },[]);
      
      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 10.800841255712163,
              longitude: 106.65971765401387,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onRegionChangeComplete={(region) => setRegion(region)}
          >
            <Marker 
          coordinate={{
            latitude: 10.800841255712163,
            longitude: 106.65971765401387,
          }} 
          pinColor="green"
          title={"title"}/>
          </MapView>
          
          <Text style={styles.text}> Current latitude: {message} </Text>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, //the container will fill the whole screen.
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
export default Map