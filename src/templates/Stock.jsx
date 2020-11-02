import React from 'react'
import {StockMenu as Menu} from '../components'

const Stock = ({children}) => {
    return (
        <>
        <h1>Stock Page</h1>
        <Menu/>
        {children}
        </>
    )
}

export default Stock