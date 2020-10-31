import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Title from './Title';
import Typography from '@material-ui/core/Typography';

const WishChart = () => {

    return (
        <>
        <Card>
            <CardContent>
            <Title>종목 검색하기</Title>
            Search ID : <input type="text"/> 
                    <button>Search</button>
            </CardContent>
            <CardContent>
            <Typography variant="h5" component="h2">
                검색한 종목의 주가차트<br/>
                <br/><br/><br/><br/><br/>
            </Typography>
            </CardContent>
        </Card>
        </>
    )
}

export default WishChart