import React from 'react';
import './SinglePlayer.css'
const SinglePlayer = (props) => {
    const{name,picture,born,stats,salary} = props.sPl;
     const handleButton = props.handleButton;
     return (
        <div>
                <div className="card mb-3" style={{maxWidth:"550px"}}>
                   <div className="row g-0">
                      <div className="col-md-4">
        
                              <img src={picture} alt="" />
                      </div>

                      <div className="col-md-8">
                            <div className="card-body">
                                    <p className="card-title text-secondary"><b>{name}</b></p>
                                    <p className="card-title text-secondary"><b>Born: {born}</b></p>
                                    <p className="card-text text-secondary"><b>Stats: {stats}</b></p>

                                    <p className="card-text text-secondary"><b>Salary: $ {salary}</b></p>
                                    <button onClick={ () => handleButton(props.sPl)}>select to club</button>
                                    
                            </div>
                      </div>



                   </div>


                </div>
        </div>
    );
};

export default SinglePlayer;