import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import './secondStep.scss';
import { multiStepContext } from '../stepContext';

function SecondStep() {

    const {  setCurrentstep, userData, setUserData, finalData, setFinalData } = useContext(multiStepContext);

    const handleBack = () => {
        setCurrentstep(1)
    }

    const handleForward = () => {
        setCurrentstep(3);
    }

    const handleTextData = (key) => (event) => {
        setUserData({...userData, [key] : event.target.value});
    }

        return (
            <div className="main-div-frst">
                <div>
                    <TextField label="Address" margin="normal" variant="outlined" color="secondary" value={userData['Address']} onChange={handleTextData('Address')} />
                </div>
                <div>
                    <TextField label="Address Line 1" margin="normal" variant="outlined" color="secondary" value={userData['AddressLine1']} onChange={handleTextData('AddressLine1')} />
                </div>
                <div>
                    <TextField label="Address Line 2" margin="normal" variant="outlined" color="secondary" value={userData['AddressLine2']} onChange={handleTextData('AddressLine2')} />
                </div>
                <div className="btn-frst">
                    <Button className="btn-scnd" variant="contained" color="secondary" onClick={handleBack}>Back</Button>
                    <Button variant="contained" color="primary" onClick={handleForward}>Next</Button>   
                </div>
            </div>
        ) 
}

export default SecondStep;