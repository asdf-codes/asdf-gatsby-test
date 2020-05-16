import React from 'react'
import {CardWrapper} from '../elements'


export const CardPress = ({href, children}) => {
    return <CardWrapper to={href}> {children} </CardWrapper>
    
}