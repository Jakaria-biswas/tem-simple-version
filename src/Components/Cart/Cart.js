import React from 'react';

import Name from '../Name/Name';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;

      let totalSalary = 0;
      for(let i=0; i<cart.length; i++){
              const salary = cart[i];
              totalSalary = totalSalary + salary.salary
      }

      // const pName = cart.map(playerName => {
      //      return <span className="pName">{pName}  </span>
    const minusPlayer = props.minusPlayer
    return (
        <div>
                <h4 className="py-2">Player select list</h4>
                <p><b>Total player add: {cart.length}</b></p>
                <p><b>Total salary: ${totalSalary}</b></p>
                
                 {
                    cart.map((name, index) => <Name id={index} minusPlayer={minusPlayer} name={name}></Name> )
                 }
        </div>
    );
};

export default Cart;