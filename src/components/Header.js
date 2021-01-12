import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    // Access to data layer
    const [{ basket, user }, dispatch] = useStateValue();

    // If sign out shown -- Sign out of firebase
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>

            {/* Amazon Logo -- Link to home page "/" */}
            <Link to='/'>
                <img className='header-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
            </Link>
            
            {/* Search Bar -- Material UI Search Icon Not Functional*/}
            <div className='header-search'>
                <input className='header-searchInput' type='text' placeholder='Currently not functional'/>
                <SearchIcon className='header-searchIcon'/>
            </div>

            {/* Nav Bar */}
            <div className='header-nav'>

                {/* Login Button -- Link to login page if no user */}
                <Link to={!user && '/login'}>
                    <div className='header-option' onClick={handleAuthentication}>
                        <span className='header-option-lineone'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='header-option-linetwo'> {user ? 'Sign Out' : 'Sign In'} </span>
                    </div>
                </Link>

                {/* Order Button -- Link to orders page */}
                <Link to='/orders'>
                    <div className='header-option'>
                        <span className='header-option-lineone'>Returns</span>
                        <span className='header-option-linetwo'>Orders</span>
                    </div>
                </Link>
                
                {/* Prime Button -- NOT ACTIVE */}
                <div className='header-option'>
                    <span className='header-option-lineone'>Your</span>
                    <span className='header-option-linetwo'>Prime</span>
                </div>

                {/* Checkout Button -- Link to checkout page, 
                Material UI Shopping Basket Icon, number of items in basket */}
                <Link to='/checkout'>
                    <div className='header-optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header-option-linetwo header-basketCount'>
                            {basket.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
