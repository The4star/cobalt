import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: .2s;
      }
`

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: .2s;
    position: absolute;
    top: 260px;
    opacity: .7;

    &:hover {
        background-color: black;
        color: white;
        border:none;
        transition: .2s;
      }
` 

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    margin: 20px 0;

    &:hover {
    background-color: #357ae8;
    border:none
    }
` 

const getButtonStyles = (props) => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    transition: .2s;
    display: flex;
    justify-content: center;


    ${getButtonStyles}
`

export {
    CustomButtonContainer
}