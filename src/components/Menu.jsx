import React from 'react'
import { Link } from 'react-router-dom';

export const UserMenu = () => (
    <nav>
        <ul>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><Link to='/signin'>Sign In</Link></li>
            <li><Link to='/mypage'>My Page</Link></li>
        </ul>
    </nav>
)

export const TotalMenu = () => (
    <nav>
        <li><Link to='/totalview'>Total View</Link></li>
    </nav>
)

export const DetailMenu = () => (
    <nav>
        <li><Link to='/detailview'>Detail View</Link></li>
    </nav>
)

export const WishMenu = () => (
    <nav>
        <li><Link to='/wishview'>Wish View</Link></li>
        <li><Link to='/wishcart'>Wish Cart</Link></li>
    </nav>
)
