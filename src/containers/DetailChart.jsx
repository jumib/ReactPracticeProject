import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const DetailChart = () => {
  
    return (
    <>
    <Card>
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

export default DetailChart