import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';
import './ChatHeader.css'
function ChatHeader({channelName}) {
  return (
    <div className='chatHeader'>
     
      <div className='chatHeader__left'>
        <h3>
            <span className='chatHeader__hash' >#</span>
            {channelName}
        </h3>
      </div>
      <div className='chatHeader__right'>
        {/* icons */}
        <NotificationsIcon/>
        <EditLocationIcon/>
        <PeopleAltIcon/>
        <div className='chatHeader__search'>
            <input placeholder='search' />
            <SearchIcon/>

        </div>

        {/* other icons */}
        <SendIcon/>
        <HelpIcon/>


      </div>
    </div>
  )
}

export default ChatHeader
