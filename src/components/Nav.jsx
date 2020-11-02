import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {

  return (
        <>
         <ol>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/user'>User</Link></li>
          <li><Link to='/covid'>Covid</Link></li>
          <li><Link to='/stock'>Stock</Link></li>
          <li><Link to='/examples'>Examples</Link></li>
        </ol>
        </>
        );
}

export default Nav