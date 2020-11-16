import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './secondStep.scss';
import './thirdStep.scss';
import { multiStepContext } from '../stepContext';

var FieldPopNumber = 0;
var key = 0;
var finalKey;

function ThirdStep() {

    const [fieldNewStete, setFieldNewState] = useState([]);

    const {  setCurrentstep, userData, setUserData, finalData, setFinalData, fieldPopNum, setFieldPopNum } = useContext(multiStepContext);

    const handleBack = () => {
        setCurrentstep(2)
    }

    const handleForward = () => {
        setFinalData(finalData => [...finalData, userData]);
        setUserData('');
        setCurrentstep(1);
    }

    const handleTextData = (key) => (event) => {
        setUserData({...userData, [key] : event.target.value});
    }

    const populateDiv = () => {
        key = key + 1;
        finalKey = `Position${key}`;
        FieldPopNumber = FieldPopNumber + 1;
        setFieldNewState({...fieldNewStete , [finalKey] : FieldPopNumber});
        console.log(fieldNewStete,'thetestingggg============')


    }

    const removeDiv = (val, values) => {
        console.log(val,"index valueeee")
        console.log(values,"index valueeee")

        // var tempArray = [fieldPopNum];
        // const subArray = fieldPopNum.filter(temp => temp != values);
        // console.log(subArray,"sub array valueeee before splice")
        // setFieldPopNum(subArray);

        // =====================================================================================

        var tempArray = fieldPopNum;
        console.log(tempArray,"tempArray valueeee")
        // const keyIndexValue =  Object.keys(tempArray)[val];
        // console.log(keyIndexValue,"the testing valueeeeee--------------------------")

        // console.log(tempArray,"tempArray valueeee")
        // const arrayKeyValue = Object.keys(tempArray);
        // console.log(arrayKeyValue,"temp array valueeee before splice")
        // arrayKeyValue.map((itemValue) => {
        //     if(itemValue == keyIndexValue) {
        //         console.log("entered equal condition")
        //         // delete tempArray[keyIndexValue]
        //         tempArray.splice(val,1);
        //         setFieldPopNum(tempArray);
        //     }
        // })

        // console.log(tempArray,"temp array valueeee before splice")
        // console.log(fieldPopNum,"temp array valueeee before splice")
        // fieldPopNum.splice(val,1);
        // console.log(fieldPopNum,"temp array valueeee after splice")

        // console.log(tempArray,"temp array valueeee after splice")
        // console.log(fieldPopNum,'the array with data after splice before setting')

        // setFieldPopNum(tempArray);

        // ----------------------------------------------------------
        var dummyUserDataArray = userData;
        const keyValue = `${val}OccupationSubFields`
        const arrayKey = Object.keys(dummyUserDataArray);
        arrayKey.map((item) => {
            if(item === keyValue) {
                delete userData[keyValue]
                setUserData(userData);
            }
            else {
                console.log("not same")
            }
        })
    }

        return (
            <div className="main-div-frst">
                <div>
                    <TextField label="Occupation" margin="normal" variant="outlined" color="secondary" value={userData['Occupation']} onChange={handleTextData('Occupation')} />
                </div>
                {
                    fieldPopNum.map((item,index) => {
                        return (
                            <div key={index}>
                                <TextField label="Occupation" margin="normal" variant="outlined" color="secondary" value={userData[`${index}OccupationSubFields`]} onChange={handleTextData(`${index}OccupationSubFields`)} />
                                <button className="rmv-style" onClick={() => removeDiv(index, item)}>Remove</button>
                            </div>
                         )
                    })
                } 
                <div>
                    <button className="add-btn-styl" onClick={populateDiv}>Add Fields</button>
                </div>
                <div>
                    <TextField label="Pan Number" margin="normal" variant="outlined" color="secondary" value={userData['PanNumber']} onChange={handleTextData('Pan Number')} />
                </div>
                <div>
                    <TextField label="Adhar Card Number" margin="normal" variant="outlined" color="secondary" value={userData['AdharCardNumber']} onChange={handleTextData('Adhar Card Number')} />
                </div>
                <div className="btn-frst">
                    <Button className="btn-scnd" variant="contained" color="secondary" onClick={handleBack}>Back</Button>   
                    <Button variant="contained" color="primary" onClick={handleForward}>Submit</Button>   
                </div>
            </div>
        ) 
}

export default ThirdStep;