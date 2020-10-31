import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Signup from './containers/Signup'
import SignIn from './containers/SignIn';
import TotalView from './containers/TotalView'
import WishList from './containers/WishList'
import DetailView from './containers/DetailView'
import { BrowserRouter, Route } from 'react-router-dom';
import { Mypage} from './containers';
import Nav from './components/Nav'
import { Detail, Home, Total, Wish, User } from './templates';


const App = () => {
  return <>
  <Provider store = {store}>
  <div style={{width: "auto",margin: "0 auto"}}>
    <BrowserRouter>
    <Nav/>
          <Route exact path="/" component={Home}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/total" component={Total}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Route path="/wish" component={Wish}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/mypage" component={Mypage}></Route>
          <Route path="/totalview" component={TotalView}></Route>
          <Route path="/detailview" component={DetailView}></Route>
          <Route path="/wishlist" component={WishList}></Route>
    </BrowserRouter>  
    </div></Provider>
    </>
}

export default App;
