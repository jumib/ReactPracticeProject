import React from 'react'
import { Link } from 'react-router-dom';

export const UserMenu = () => (
    <nav>
        <ul>
            <li><Link to='/signup'>회원가입</Link></li>
            <li><Link to='/signin'>로그인</Link></li>
            <li><Link to='/mypage'>마이페이지</Link></li>
        </ul>
    </nav>
)

export const StockMenu = () => (
    <nav>
        <ul>
            <li><Link to='/news'>기사크롤링</Link></li>
            <li><Link to='/financial'>재무제표</Link></li>
        </ul>
    </nav>
)

export const CovidMenu = () => (
    <nav>
        <ul>
            <li><Link to='/covidinfo'>현황</Link></li>
            <li><Link to='/covidstock'>특정주비교</Link></li>
        </ul>
    </nav>
)
