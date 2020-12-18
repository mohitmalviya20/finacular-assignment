import { Badge } from '@material-ui/core'
import { Notifications, Settings } from '@material-ui/icons'
import React from 'react'
import "./css/Navbar.css"
function Navbar() {
    return (
        <div className="navbar">
            <div>
                <Settings className="navbar_icon"/>
            </div>
            <div>
                <Badge color="secondary" variant="dot" badgeContent=" ">
                <Notifications className="navbar_icon"/>
                </Badge>
            </div>
        </div>
    )
}

export default Navbar
