import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const ButtonWrapper = styled(props => <Link {...props}/>)`
    padding: 0.5rem 0.75rem;
    background-color: white;
    color: ${props => props.theme.colors.light1};
    font-weight: 700;
    font-size: 0.875rem;
    width: content-fit;
    padding: 5rem;
    transition: transform 1s ease, box-shadow 1s ease;
    cursor: pointer;
    text-decoration: none;
    &:hover,
    &:focus {
        transform: scale(1.1);
    }
`