import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 700;
    font-size: .9em;
`

const Footer = () => {
    return (
        <div style={{padding: "2em 0"}} >
            <span style={{color: "grey", fontSize: ".9em"}} > ©2021 </span> <StyledLink to="/#"> EmergencyResponseSystem </StyledLink>
        </div>
    )
}

export default Footer
