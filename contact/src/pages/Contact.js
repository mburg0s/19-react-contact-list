
import { useState} from 'react'
import listContact from '../contacts.json'
import {
    Link
  } from 'react-router-dom';
  

export default function Contact() {
    const [person] = useState(listContact)
    return (    

        <div> 
            <div className = "peepContainer">
                <div className = "myPeeps">
                    <h1>My Peeps</h1>
                </div>
                {person.map((p) => (
                    <li>
                        <Link to={`/detail/${p.id}`} className ="linkClass">
                            <img src ={p.picture.thumbnail} 
                                className ="contactPic" 
                            /> 
                           <span className ="nameClass"> {p.name.first} {p.name.last} </span>
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    )   


}