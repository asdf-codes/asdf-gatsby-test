import styled from 'styled-components'

export const ContentWrapper = styled.main `
    grid-column: 4 / span 8;
    background-color: ${props => props.theme.colors.light2};
    padding: ${props => `${props.theme.spacing.xLarge} ${props.theme.spacing.xxLarge}`};
    box-shadow: ${props => props.theme.shadows.shadow1};
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacing.medium} ${props.theme.spacing.large}`};
    }
`