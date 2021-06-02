import React from 'react'
import styled, { ThemeProvider } from 'styled-components';

const Div = styled.div`
width: 100%;
margin: 0 auto;
text-align: center;
`;

const homepage = () => {
    return (
        <Div>
            <h1>Home</h1>
        </Div>
    )
}

export default homepage
