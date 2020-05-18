import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const ButtonWrapper = styled(props => <Link {...props}/>)`
    background-color: white;
    color: ${props => props.theme.colors.light1};
    font-weight: 700;
    font-size: 0.875rem;
    width: content-fit;
    transition: transform 1s ease, box-shadow 1s ease;
    cursor: pointer;
    text-decoration: none;
    &:hover,
    &:focus {
        transform: scale(1.1);
    }
`