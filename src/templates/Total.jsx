import React from 'react'
import {TotalMenu as Menu} from '../components'
import { TotalView } from '../containers'
import TotalChart from '../containers/TotalChart'
import TotalList from '../containers/TotalList'
import TotalTable from '../containers/TotalTable'

const Total = () => {
    return (
        <>
        <h1>Total</h1>
        <Menu/>
        <TotalView/>
        <TotalList/>
        <TotalChart/>
        <TotalTable/>
        </>
    )
}

export default Total