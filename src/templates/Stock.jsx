import React from 'react'
import {StockMenu as Menu} from '../components'
import {StockNews, StockFinancial, StockInfo} from '../containers'

const Stock = ({children}) => {
    return (
        <>
        <h1>Stock Page</h1>
        <StockNews/>
        <StockInfo/>
        <StockFinancial/>
        {children}
        </>
    )
}

export default Stock