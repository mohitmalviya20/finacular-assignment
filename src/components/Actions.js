import { Button } from '@material-ui/core'
import { FlashOn } from '@material-ui/icons'
import React, { useState } from 'react'
import image1 from "../assets/image_one.svg"
import image2 from "../assets/image_two.svg"
import ActionsCards from './ActionsCards'


import "./css/Actions.css"
function Actions() {
    const [data,setData]=useState([{key:1,text:"Understanding the power of compounding",image:image1,buttonText:"Learn Now"},{key:2,text:"Track all your expenses on a daily basis",image:image2,buttonText:"Track Now"}])
    return (
        <div className="actions">

            <div className="button_container">
            <Button className="actions_button"><FlashOn/><span>Actions</span></Button>
            </div>
            <div className="cards">
                {
                    data.map(data=><ActionsCards key={data.key} image={data.image} text={data.text} ButtonText={data.buttonText}/>)
                }
            </div>
            
        </div>
    )
}

export default Actions
