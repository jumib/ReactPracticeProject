import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Mypage, DetailView, WishCart, WishView, TotalView, Signup, StockNews, StockFinancial, CovidInfo, CovidStock, StockInfo} from './containers';
import SignIn from './containers/SignIn'
import {Nav} from './components'
import { Home, Stock, User, Covid, Examples } from './templates';


const App = () => {
  return <>
    <BrowserRouter>
    <Nav/>
          <Route exact path="/" component={Home}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/stock" component={Stock}></Route>
          <Route path="/covid" component={Covid}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/mypage" component={Mypage}></Route>
          <Route path="/totalview" component={TotalView}></Route>
          <Route path="/detailview" component={DetailView}></Route>
          <Route path="/wishview" component={WishView}></Route>
          <Route path="/wishcart" component={WishCart}></Route>
          <Route path="/news" component={StockNews}></Route>
          <Route path="/stockinfo" component={StockInfo}></Route>
          <Route path="/financial" component={StockFinancial}></Route>
          <Route path="/covidinfo" component={CovidInfo}></Route>
          <Route path="/covidstock" component={CovidStock}></Route>
          <Route path="/examples" component={Examples}></Route>
    </BrowserRouter>  
    </>
}

export default App;
