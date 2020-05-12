import React from 'react'
import { ContainerWrapper } from '../elements/ContainerElements'
import { Nav, Footer} from '../components'


export const Container = ({children}) => {
    return(
        <ContainerWrapper>
            <Nav/>
            {children}
            <Footer/>
        </ContainerWrapper>
    )
}