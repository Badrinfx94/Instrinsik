import React, { Component,useState,useEffect,useCallback } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
function Example() {
    const [messages, setMessages] = useState([]);
   
    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hi',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
    }, [])
   
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
   
    return (
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
class Chat extends Component {
    static navigationOptions = {
        headerTitle:"none",
        headerTitleStyle: { alignSelf: 'center',backgroundColor:"transparent",opacity:0 },
         headerTransparent: {
           position: 'absolute',
           backgroundColor: 'transparent',
           zIndex: 100,
           top: 0,
           left: 0,
           right: 0
         },
         headerLeft: (
           <View style={{paddingLeft:20}}>
         
           </View>
         ),
         headerRight: (
           <View style={{flexDirection:"row",padding:10}}>
            
           </View>
         )
       };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Example/>
      </View>
    );
  }
}

export default Chat;


