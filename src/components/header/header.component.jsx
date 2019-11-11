import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import './header.styles.scss'

const Header = ({ currentUser, history, signOut}) => (

    <div className='header'>
        <Link className='logo-container' to='/'>
            C
        </Link>
        <div className='options'>
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
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(withRouter(Header));