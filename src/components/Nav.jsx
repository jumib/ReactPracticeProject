import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => <>

<nav>
    <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">회원가입</Link></li>
        <li><Link to="/signin">로그인</Link></li>
        <li><Link to="/mypage">마이페이지</Link></li>
    </ol>
</nav>


</>

export default Nav
