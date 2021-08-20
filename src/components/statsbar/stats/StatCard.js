import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Arrow} from "../../../assets/svgs/arrow-up.svg"

const BottomSheet = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1.5em 1.5em;
    border: 1px solid white;
    width: 18em;
    border-radius: .5em;

    p {
        margin: 0;
    }

    #upper {
        margin-bottom: 1em;
        
        #upper-upper {
            p {
                color: #8a9aac;
                font-weight: 700;
                font-size: .8em;
            }
        }

        #upper-lower {
            p {
                color: #656485;
                font-weight: 700;
                font-size: 1.2em;
            }
        }
    }

    #lower {

        #timespan {
            font-weight: 1;
            color: #a9b4c1;
            font-size: .9em;
        }

    }

`

const StatCard = () => {
    return (
        <BottomSheet>
            <div
                id="upper"
            >
                <div id="upper-upper" >
                    <p>
                    EMERGENCY
                    </p>
                </div>
                <div id="upper-lower" >
                    <p>
                    1
                    </p>
                </div>
            </div>

            <div
                id="lower"
            >
                <p style={{color: "#2dce8a"}}>
                    <Arrow fill="#2dce8a" style={{height: ".8em", width: ".8em", margin: 0}} /> 3.48% {"    "} 
                    <span id="timespan" > Since last month </span>
                </p>
            </div>
        </BottomSheet>
    )
}

export default StatCard
