import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    table: {
      maxWidth: 800,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const StockFinancial = () => {

    const classes = useStyles();


    return (<>
    
    <h3>재무제표를 분석해 예상당기순이익과 특정일 주가예측</h3>
    {/* <input type="text" placeholder="종목을 검색해보세요 !"/> 
                    <button>검색</button>
    <h3>예상당기순이익</h3>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>기업정보</TableCell>
            <TableCell align="right">1/4분기</TableCell>
            <TableCell align="right">2/4분기</TableCell>
            <TableCell align="right">3/4분기</TableCell>
            <TableCell align="right">4/4분기</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <h3>counting ...</h3>
        <p>%%%의 당기순이익은 %원으로 예측되었습니다.</p>
    </div>
    </TableContainer>
    <hr></hr>
    <h3>특정일 주가예측</h3>
    <form className={classes.container} noValidate>
      <TextField
        id="datepick"
        label="Birthday"
        type="date"
        defaultValue="2020-06-28"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <div>
        <h3>counting ...</h3>
    <p>%%%의 주가는 %원으로 예측되었습니다.</p>
    </div>            */}
    </>)}

export default StockFinancial