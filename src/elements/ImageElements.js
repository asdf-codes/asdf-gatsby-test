import styled from "styled-components"


export const FeatureImageWrapper = styled.div `
    /* width: clamp(auto 50% 100vh);
    height: clamp(auto 50% 50vh);
    position: relative; */
    display: flex;
    justify-content: center;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2/ span 6;
    }
`