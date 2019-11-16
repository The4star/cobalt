import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'

const OptionContainerStyles = css`
    padding: 10px 15px;
    font-size: 25px;
    cursor: pointer;
`

const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

`

const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    color: #001895;
    text-decoration: none;
    font-size: 75px;
`

const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`

const OptionDiv = styled.div`
    ${OptionContainerStyles}
`

const UserContainer = styled.div`
    padding: 10px 15px;
    font-size: 25px;
`

export {
     HeaderContainer,
     LogoContainer,
     OptionsContainer,
     OptionLink,
     OptionDiv,
     UserContainer
}