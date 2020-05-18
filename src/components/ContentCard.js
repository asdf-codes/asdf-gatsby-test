import React from 'react'
import { CardWrapper, P, H2} from "../elements"
import { Button, FeatureImage, CardPress, Footer} from '../components'

export const ContentCard = ({date, title, excerpt, slug, image}) => {
    return (
            <CardPress href={slug}>
            <Button href={slug}>
                <H2 textAlign="center" margin="0 0 1rem 0"> 
                    {title}
                </H2>
                <FeatureImage fixed={image}/>
                {/* <P size="xSmall" textAligh="center" margin="0 0 0.5rem 0" color="dark2">
                    {date}
                </P> */}

                <P size="small" textAlign="center" margin="1rem 0 1.5rem 0" color="dark2">
                    {excerpt}
                </P>
                <Footer/>
            </Button>
            </CardPress>
    )
}