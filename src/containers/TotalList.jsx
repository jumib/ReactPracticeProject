import React from 'react'
import { Card, CardContent } from '@material-ui/core';


const TotalList = () => {

    return (
        <Card>
            <CardContent>
            <table>
                <h3>Total stock list</h3>
                <tr>
                    <th>userid</th>
                    <th>name</th>
                    <th>pclass</th>
                    <th>gender</th>
                    <th>age_group</th>
                    <th>embarked</th>
                    <th>rank</th>
                </tr>
                <tr>
                    <th>userid</th>
                    <th>name</th>
                    <th>pclass</th>
                    <th>gender</th>
                    <th>age_group</th>
                    <th>embarked</th>
                    <th>rank</th>
                </tr>
            </table>
            </CardContent>
        </Card>
    )
}

export default TotalList