import { useState } from 'react';
import "./Employer.css"

function Employer ({name,image,age,dob,bio}){
    return(
        <div className="container">
            <h2>{name}</h2>
            <img className="myimage" src={image} alt={name} />
            <h3>Age: {age}</h3>
            <h3>Date of birth: {dob}</h3>
            <h4>{bio}</h4>

        </div>
    );

}

export default Employer;