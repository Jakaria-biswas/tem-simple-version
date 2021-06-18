import React, { useState } from 'react';
import Data from '../../Data/Data.json'
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Player.css';
import Cart from '../Cart/Cart';
const Player = () => {
 
    const [player, setPlayer] = useState(Data);
    const [cart, setCart] = useState([])

    const handleButton = (SinglePlayer) => {
        
             const newCart = [...cart, SinglePlayer];
             setCart(newCart)
  }
              

  const minusPlayer = (id) => {
         
              setCart((newCart)=> { 
                    return newCart.filter((array,index) => {
                            return index !== id
                    })
              })
}
    return (
        <div>
                <div className="container">
                        <div className="row">
                               <div className="col-8">
                                   <h4 className="py-2">total players {player.length}</h4>
                                     {
                                          player.map( sPl => <SinglePlayer handleButton={handleButton} sPl={sPl}></SinglePlayer>)
                                     }
                               </div>
                         <div className="col-4">
                               <Cart cart={cart} minusPlayer={minusPlayer}></Cart>
                        </div>
                        </div>
                        
                </div>
        </div>
    );
};

export default Player;