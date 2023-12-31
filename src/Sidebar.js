import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call'
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db from './firebase'
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import {auth} from './firebase'

function Sidebar() {
  const user = useSelector(selectUser)
  console.log('photo url :) : ',user.photo)
  const [channels,setChannels] = useState([]);
  
  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot)=>
    setChannels(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        channel: doc.data(),
      }))
    )
    );
  },[])
  console.log(channels)

  const handleAddChannel = () => {
    const channelName = prompt('Enter a new channel name :)');
    if(channelName){
      db.collection('channels').add({
        channelName:channelName,
      })
    }
  }
  return (
    <div className='sidebar'>
        {/* sidebaar */}
     
      <div className='sidebar__top'>
        <h3>Discord</h3>
        
        <ExpandMoreIcon/>
      </div>

      <div className='sidebar__channels'>
        <div className='sidebar__channelHeader'>
            <div className='sidebar__header'>
                <ExpandMoreIcon/>
                <h4>text channels</h4>
            </div>
            <AddIcon onClick={handleAddChannel} className='sidebar__addChannel' />
        </div>

        <div className='sidebar__channelsList'>
          {
            channels.map((id,channel) => (
              <SidebarChannel key={id} id={id} channelName={channel} />
            ))
          }
        
        </div>
      </div>

      <div className='sidebar__voice'>
        <SignalCellularAltIcon className='sidebar__voiceIcon' fontSize='large'/>
        <div className='sidebar__voiceInfo'>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className='sidebar__voiceIcons'>
          <InfoIcon/>
          <CallIcon/>
        </div>
      </div>

      <div className='sidebar__profile'>
        <Avatar src={user.photo} />
        <div className='sidebar__profileInfo'>
          <h3>{user.displayName}</h3>
          <p>{user.uid.substring(0,5)}</p>
         
        </div>
        <div className='sidebar__profileIcons'>
        
            <MicIcon/>
            <HeadsetIcon/>
            <SettingsIcon/>
            
           
        </div>
        <div className='logout'>
          <Button onClick={() => auth.signOut()}>
              <LogoutIcon/>
          </Button>
        </div>
      </div>


      
    </div>
    
  )
}

export default Sidebar
