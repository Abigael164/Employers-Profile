import { useState } from 'react';
import Employer from "./Employer.jsx";

function EmployerUI(){
    return(
        <div>
            <h2 style={{marginBottom:20}}>Employers</h2>
            <Employer
                name = "Abigael"
                image= "/Emp4.jpg"
                age = {20}
                dob = "2005/04/16"
                bio = "Cloud Engineer."
            />
            <Employer
                name = "Cute"
                image= "/Emp3.jpg"
                age={23}
                dob = "2005/08/13"
                bio = "Frontend Webdeveloper."
            
            />
        </div>
    );
}
export default EmployerUI;



