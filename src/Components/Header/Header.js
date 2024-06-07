import './Header.css';
import Menu from '../Menu/Menu';

import { Link } from 'react-router-dom'
import LogoImg from '..//..//img/swa-brandlogo-icon-small-white.svg'

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head">
          <div>
            <div className="BrandLogo_img flex">
              <Link to="" className="BrandLogo_img"><img src={LogoImg} alt="" /></Link>
            </div>
            <Menu />
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;