import React, { useEffect, useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GifBoxIcon from '@mui/icons-material/GifBox';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './Chat.css'
import Message from './Message';
import ChatHeader from './ChatHeader'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db from './firebase'
import { selectChannelId, selectChannelName } from './features/appSlice';
import firebase from 'firebase/compat/app'


function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  // const ch_name = channelId.channel.channelName;
  console.log(channelId, ' : ', channelName, ' : ')
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  

  useEffect(() => {
    if(channelId){
      db.collection('channels')
      .doc(channelId)
      .collection('messages')
      .orderBy('timestamp')
      .onSnapshot((snapshot) => 
        setMessages(snapshot.docs.map((doc) => doc.data()))
    );
    } 
  },[channelId])

  console.log('messages : ',messages)

  const sendMessage = e => {
    e.preventDefault();

    db.collection('channels').doc(channelId).collection('messages').add({
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      message:input,
      user:user
    })
    setInput('');
  }

  return (
    <div className='chat'>
     
      <ChatHeader channelName={channelName}/>
      <div className='chat__messages'>
       {messages.map((message) => (
        // console.log('msg : ',message);
        <Message timestamp={message.timestamp} user={message.user} message={message.message} />
       ))}
      </div>
      <div className='chat__input'>
        <AddCircleIcon/>
        <form>
            <input value={input} disabled={!channelId} onChange={e => setInput(e.target.value)} placeholder={`message #test channel`} />
            <button  onClick={sendMessage} disabled={!channelId} className='chat__inputButton' type='submit'>
                Send Messages
            </button>
        </form>
        <div className='chat__inputIcons'>
            <CardGiftcardIcon/>
            <GifBoxIcon/>
            <EmojiEmotionsIcon/>
        </div>
      </div>
    </div>
  )
}

export default Chat
