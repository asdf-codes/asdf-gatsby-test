import React from 'react'
import { ContainerWrapper } from '../elements/ContainerElements'


export const Container = ({children}) => {
    return(
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    )
}