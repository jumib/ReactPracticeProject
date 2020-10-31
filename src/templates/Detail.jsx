import React from 'react'
import {DetailMenu as Menu} from '../components'
import { DetailView } from '../containers'
import DetailChart from '../containers/DetailChart'
import DetailList from '../containers/DetailList'
import DetailTable from '../containers/DetailTable'

const Detail = () => {
    return (
        <>
        <h1>Detail</h1>
        <Menu />
        <DetailView/>
        <DetailList/>
        <DetailChart/>
        <DetailTable/>
        </>
    )
}

export default Detail