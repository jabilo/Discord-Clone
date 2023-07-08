import React from 'react'
import './SidebarChannel.css'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appSlice'

function SidebarChannel({id,channelName}) {
  const dispatch = useDispatch();

  console.log('id : ',id.id)
  console.log('channel name : ',id.channel.channelName)
  return (
    <div className='sidebarChannel' onClick={() => dispatch(setChannelInfo({
      channelId:id.id,
      channelName:id.channel.channelName,

    }))}>
      <h4>
        <span className='sidebarChannel__hash'>#</span>
        {id.channel.channelName}
      </h4>
    </div>
  )
}

export default SidebarChannel
