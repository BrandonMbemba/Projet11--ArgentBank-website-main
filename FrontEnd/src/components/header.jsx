import React from 'react';
import Logo from '../assets/images/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/auth.actions';
import { Link, useNavigate } from 'react-router-dom';
import '../../sass/header.scss';

function Header () {
    /* Updates user data on header component from state redux */
    const isConnected = useSelector((state) => state.auth.token);
    const username = useSelector((state) => state.user.userData.username);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logoutHandler = () => {
        dispatch(logout());
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    }
    return (
        <div>
            <header>
                <nav className="main-nav">
                    <Link to="/">
                        <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                    </Link>
                    {isConnected ? (
                    <div className='connected'>
                        <Link to='/profile'>
                            <i className='fa-solid fa-2x fa-circle-user' />
                            <p>{username}</p>
                        </Link>
                        <Link to='/' onClick={logoutHandler}>
                            <i className='fa-solid fa-arrow-right-from-bracket' />
                            <p> Sign out </p>
                        </Link>
                    </div>
                ) : (
                    <div className='not-connected'>
                        <Link to='/signin' >
                            <i className="fa-solid fa-circle-user"></i>
                            <p>Sign In</p>
                        </Link>
                    </div>
                )}
                </nav>
            </header>
        </div>
    );
};

export default Header;