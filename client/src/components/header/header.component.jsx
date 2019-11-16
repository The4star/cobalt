import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon.components'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// styled components
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink, UserContainer} from './header.styles'

const Header = ({ currentUser, history, signOut, hidden }) => (

    <HeaderContainer >
        <LogoContainer to='/'>
            C
        </LogoContainer>
        <OptionsContainer className='options'>
            {
                currentUser ?
                <UserContainer className='user'>
                    Welcome {currentUser.firstName}
                </UserContainer>
                : null
            }
            <OptionLink className='option' to='/shop'>
                Shop
            </OptionLink>
            <OptionLink className='option' to='/contact'>
                Contact
            </OptionLink>
            {
                currentUser ?
                <OptionDiv className='option' onClick={async () => {
                    if (signOut() === true) {
                        history.push('/')
                    }
                    } 
                }
                >
                    Sign Out
                </OptionDiv>
                :
                <OptionLink className='option' to='/signin'>
                    Sign in
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown />
        }
        
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default withRouter(connect(mapStateToProps)(Header));