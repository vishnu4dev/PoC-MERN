import React, { useContext } from 'react';
import { Stepper,StepLabel, Step } from '@material-ui/core';
import './pageStep.scss';
import CardDisplay from './Components/cardDisplay';
import FirstPage from './Components/firstStep';
import SecondPage from './Components/secondStep';
import ThirdPage from './Components/thirdStep';
import { multiStepContext } from './stepContext';

function PageStep() {

    const { currentStep } = useContext(multiStepContext);

    const showActivePage = (inp) => {
        switch(inp) {
            case 1 :
                return <CardDisplay />
            case 2 : 
                return <SecondPage />
            case 3 :
                return <ThirdPage />
        }
    }

        return (
            <div>
                <h3 className="hdr-style">Registration Steps</h3>
                    <div className="center-stepper">
                        <Stepper className="stpr-style" activeStep={currentStep - 1} orientation="horizontal">
                            <Step>
                                <StepLabel></StepLabel>
                            </Step>
                            <Step>
                                <StepLabel></StepLabel>
                            </Step>
                            <Step>
                                <StepLabel></StepLabel>
                            </Step>
                        </Stepper>
                    </div>
                    {
                        showActivePage(currentStep)
                    }
            </div>
        )
}
export default PageStep;