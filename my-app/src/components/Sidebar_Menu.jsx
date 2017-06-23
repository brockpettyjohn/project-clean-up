import React, { Component } from 'react';
import HeaderSideBar from './Header_Sidebar.jsx'
import AllUnreads from './All_Unreads.jsx'
import AllThreads from './All_Threads.jsx'
import Channels from './Channels.jsx'
import DirectMessages from './Direct_Messages.jsx'

class SideBarMenu extends Component {
    render(){
      return(
        <div className='sidebar-menu'>
            <div className='sidebar-words'>
                <HeaderSideBar />
                <AllUnreads />
                <AllThreads />
                <Channels />
                <DirectMessages />
            </div>
        </div>
        )
    }
}
export default SideBarMenu;