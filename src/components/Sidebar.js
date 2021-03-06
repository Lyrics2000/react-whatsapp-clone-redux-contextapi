import { Avatar, IconButton } from '@material-ui/core'
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons'
// import DonutLargeIcon from "@material-ui/icons/DonutLargeIcon"
import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />

                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                    
                    
                    
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input  placeholder="Search or start new Chat" type="text"/>

                </div>
            </div>

            <div className="sidebar__chats">

            <SidebarChat  addNewChat/>
            </div>
            
        </div>
    )
}

export default Sidebar
