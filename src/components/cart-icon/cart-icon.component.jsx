import './cart-icon.styles.scss';
import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';
import {ReactComponent as ShoppingIcon} from '../../assets/111 shopping-bag.svg'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(DropdownContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count' >10</span>
        </div>
    )
}

export default CartIcon;