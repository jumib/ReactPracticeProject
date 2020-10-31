import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {

  return (
        <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/user'>User</Link></li>
        <li><Link to='/total'>total</Link></li>
        <li><Link to='/detail'>detail</Link></li>
        <li><Link to='/wish'>wish</Link></li>
        </>
        );
}

export default Nav