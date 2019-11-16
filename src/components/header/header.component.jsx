import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon.components'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss'

const Header = ({ currentUser, history, signOut, hidden }) => (

    <div className='header'>
        <Link className='logo-container' to='/'>
            C
        </Link>
        <div className='options'>
            {
                currentUser ?
                <div className='user'>
                    Welcome {currentUser.firstName}
                </div>
                : null
            }
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
            {
                currentUser ?
                <div className='option' onClick={async () => {
                    if (signOut() === true) {
                        history.push('/')
                    }
                    } 
                }
                >
                    Sign Out
                </div>
                :
                <Link className='option' to='/signin'>
                    Sign in
                </Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
            <CartDropdown />
        }
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default withRouter(connect(mapStateToProps)(Header));