
import { useState } from 'react'
import listContact from '../contacts.json'

import {
    Link
  } from 'react-router-dom';


export default function ContactDetail(props) {
    // console.log(props.match.params.id, 'props')
    // console.log(props.match.params.id, typeof props.match.params.id)

    const parmID = Number(props.match.params.id)
    const [userList] = useState(listContact)
    const conUser = userList.find(user => user.id === parmID)
    console.log(conUser)
    
    return (
        <div className="detailContainer">
            <div className="picContainer"> 
            <span className="goBack">
                <Link to="/" className="linkBack"><span className="back">← </span></Link>
            </span>
                <img src={conUser.picture.large} className="lrgPicClass"/>
            </div>

            <div className="detailClass">
                <p className="nameDetailClass">👤 <span>{conUser.name.first} {conUser.name.last}</span></p>
                <p className="emailClass"><span className="iconEmail">✉️ </span>{conUser.email}</p>
                <p className="cellClass"><span className="iconCell">☏</span> {conUser.cell}</p>
                <p className="locationClass"><span>🌎 {conUser.location.city}, {conUser.location.state}</span></p>
            </div>
        </div>
    ) 
}  
