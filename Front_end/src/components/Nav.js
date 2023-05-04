import React from 'react';
 
import {Link} from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    return (
        <div>
          <ul className="nav-ul">
                        <li><Link to="/">Page1</Link></li>
                        <li><Link to="/Book_list">Page2</Link></li>
                        <li><Link to="/Search">Page3</Link></li>

                         
                    </ul>
        </div>
    )
}

export default Nav;