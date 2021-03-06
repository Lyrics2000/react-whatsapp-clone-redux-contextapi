import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, Chat, DonutLarge, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Chat.css'

const ChatComponent = () => {
    const [input, setInput] =  useState("") 
    const [seed,setSeed] = useState('')

    useEffect(() =>{
        setSeed(Math.floor(Math.random() * 5000))

    })

    const sendMessage = (e) =>{

    }
    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at ...</p>

            </div>
            <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>

            </div>

            </div>
            <div className="chat__body">
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                   
                    <span className="chat_name">Sonney

                    </span>
                    Hey Guys
                    <span className="chat_timestamp">
                        3:52pm

                    </span>
                </p>

            </div>
            <div className="chat__footer">
                <InsertEmoticon/>
                <form >
                    <input value={input} onChange = {e => {
                        setInput(e.target.value)
                    }} placeholder="Type a message" type ="text" />
                    <button  onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <Mic/>
            </div>
            
        </div>
    )
}

export default ChatComponent
