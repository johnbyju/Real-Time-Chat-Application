import React from 'react'

import{MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('381f483d-31d0-4de0-9df2-db4bb02f6e78',props.user.username,props.user.secret)
  return (
    <div style={{height :'100vh'}}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style={{height:'100%'}}/>

    </div>
  )
}

export default ChatsPage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        