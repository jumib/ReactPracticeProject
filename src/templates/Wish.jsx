import React from 'react'
import {WishMenu as Menu} from '../components'
import { WishView } from '../containers'
import WishChart from '../containers/WishChart'
import WishList from '../containers/WishList'
import WishTable from '../containers/WishTable'

const Wish = () => {
    return (
        <>
        <h1>Wish</h1>
        <Menu/>
        <WishView/>
        <WishChart/>
        <WishTable/>
        <WishList/>
        </>
    )
}

export default Wish