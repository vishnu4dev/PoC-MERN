import React from 'react';
import PageStep from './pageStep';

export const multiStepContext = React.createContext();

function StepContext() {

    const [currentStep, setCurrentstep] = React.useState(1);
    const [userData, setUserData] = React.useState([]);
    const [finalData, setFinalData] = React.useState([]);
    const [fieldPopNum, setFieldPopNum] = React.useState([]);

        return (
            <div>
                <multiStepContext.Provider value={{currentStep, setCurrentstep, userData, setUserData, finalData, setFinalData, fieldPopNum, setFieldPopNum}}>
                    <PageStep />
                </multiStepContext.Provider>
            </div>
        );
}

export default StepContext;