import {
  Pusher,
  PusherMember,
  PusherChannel,
  PusherEvent,
} from '@pusher/pusher-websocket-react-native';
import {React , Component, useState} from 'react';
const pusher = Pusher.getInstance();
      await pusher.init({
        apiKey: "9ce4abce09e857dc02f8",
        cluster: "ap1"
      });
        
      await pusher.connect();
      await pusher.subscribe({
        channelName: "my-channel", 
        onEvent: (event : PusherEvent) => {
          setMessage(event);
        }
      });
    
    const [message,setMessage] = useState({
      message : "123"
    })