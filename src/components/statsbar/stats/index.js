import React from 'react'
import styled from 'styled-components'
import StatCard from './StatCard'

const BottomSheet = styled.div`
    display: flex;
    // border: 1px solid white;
    padding: 4em 2.2em 1em 2.2em;
    justify-content: space-between;
`

const stats = () => {
    return (
        <BottomSheet>
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
        </BottomSheet>
    )
}

export default stats
