import styled from "styled-components"


export const FeatureImageWrapper = styled.div `
    grid-column: 3 / span 10;
    grid-row: 2/4;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2/ span 6;
    }
`