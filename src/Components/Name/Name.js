import React from 'react';
import './Name.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
const Name = (props) => {
    const name = props.name;
   const minusPlayer = props.minusPlayer
    return (
        
               <span>{name.name} <FontAwesomeIcon onClick={() => minusPlayer(props.id)} className="minus" title="minus" icon={faMinusCircle} /></span>
        
    );
};

export default Name;