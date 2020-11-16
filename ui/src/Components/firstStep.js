import React, { useContext } from 'react';
import './firstStep.scss';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../stepContext';
import DisplayTable from '../Components/displayTable';

function FirstStep() {

    const {  setCurrentstep, userData, setUserData, finalData } = useContext(multiStepContext);

    const handleUserData = () => {
        setCurrentstep(2);
    }

    const handleTextData = (key) => (event) => {
        setUserData({...userData, [key] : event.target.value});
    }
        return (
            <div>
                <div className="main-div-frst">
                <div>
                    <TextField label="First name" margin="normal" variant="outlined" color="secondary" value={userData['FirstName']} onChange={handleTextData('FirstName')} />
                </div>
                <div>
                    <TextField label="last name" margin="normal" variant="outlined" color="secondary" value={userData['LastName']} onChange={handleTextData('LastName')} />
                </div>
                <div>
                    <TextField label="contact" margin="normal" variant="outlined" color="secondary" value={userData['Contact']} onChange={handleTextData('Contact')} />
                </div>
                <div className="btn-frst">
                    <Button variant="contained" onClick={handleUserData} color="primary">Next</Button>   
                </div>
                </div>
                <div className="disp-tble">
                {
                    finalData.length > 0 ? <DisplayTable /> : ''
                }
                </div>
            </div>
        ) 
}

export default FirstStep;