import React from 'react'
import "./css/Sidebar.css"
import logo from "../assets/logo.svg"
import { ArrowBackIos, DashboardOutlined, EventNoteOutlined, ExpandMore, PieChartOutlined, PollOutlined } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo_container">

            <div className="logo_data">
            <div className="logo">
            <img src={logo} alt="finacular"/>
            <h2>Finacular</h2> 
            </div>
            <IconButton>
                <ArrowBackIos/>
            </IconButton>
            </div>

            <div className="nav_links">
                <div>
                    <DashboardOutlined/>
                    <h2>Dashboard</h2>
                </div>
                <div>
                    <PieChartOutlined/>
                    <h2>Assets</h2>
                </div>
                <div>
                    <PollOutlined/>
                    <h2>Tracker</h2>
                </div>
                <div>
                    <EventNoteOutlined/>
                    <h2>Planning & Advisory</h2>
                </div>
            </div>
            </div>
            <div className="avatar">
                <div>
                <div className="circle">
                    <Avatar src="https://media-cdn.tripadvisor.com/media/photo-s/0f/de/81/72/random-shot-part-of-a.jpg" alt="person"/>   
                </div>
                <h2>Vadana M</h2>
                </div>
                <ExpandMore/>

            </div>
                      
        </div>
    )
}

export default Sidebar
