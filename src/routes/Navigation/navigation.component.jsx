import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/083 crown.svg';
import { UserContext } from "../../contexts/users.context";
import { DropdownContext } from "../../contexts/dropdown.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(DropdownContext);
  // const signoutHandler = async () => {
  //   await SignOutUser();
  //   setCurrentUser(null);
  // }
    return(

      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className='logo'/>
            </Link>
          
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                Shop
            </Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={SignOutUser}>SignOut</span>
              ) : (
              <Link className="nav-link" to='/auth'>
              SignIn
          </Link>
          )
            }
            <CartIcon />
            
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;