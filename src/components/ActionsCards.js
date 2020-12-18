import { Button } from '@material-ui/core'
import React from 'react'
import "./css/ActionCards.css"
function ActionsCards({image,text,ButtonText}) {
    return (
        <div className="actionCards">
            <img src={image} alt="action image"/>
            <p>{text}</p>
            <Button className="actionCards_button">{ButtonText}</Button>
        </div>
    )
}

export default ActionsCards
