import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
border-radius:40px;
border:1px solid ${({ theme }) => theme.fontColor};
padding: 5px 20px 5px 20px;
font-size: 13px;
margin-right: 20px;
background-color: transparent;
color: ${({ theme }) => theme.fontColor};
`;

const button = () => {
    return (
        <Button>
            CONTATTI
        </Button>
    )
}

export default button
