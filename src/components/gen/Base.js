import React from 'react'
import Panel from './Panel'
import Sheet from './Sheet'


const Base = () => {
    return (
        <div style={{display: "flex", flex: 1}} >
            <Panel />
            <Sheet />
        </div>
    )
}

export default Base
