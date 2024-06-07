import './Menu.css';
import Auth from '../Auth/Auth';
import {Link} from 'react-router-dom'
import CategoryList from '../CategoryList/CategoryList'
import CartLink from '../CartLink/CartLink'

function Menu() {
  return (
    <nav className='Menu'>
      <ul className='menu_list flex'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/delivery">Delivery</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
         <CategoryList />
        </li>
        <li>
          <Auth />
        </li>
        <li>
          <CartLink />
        </li>
      </ul>
    </nav>
  );
}

export default Menu;