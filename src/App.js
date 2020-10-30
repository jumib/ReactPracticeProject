import React from 'react';
import { Provider } from 'react-redux'
// import TodoInput from './components/TodoInput'
// import TodoList from './components/TodoList'
import store from './store'
import Signup from './containers/Signup'
import SignIn from './containers/SignIn';
import { BrowserRouter, Route } from 'react-router-dom';
import { Mypage, Orders } from './containers';
import Nav from './components/Nav'
import { Home } from './templates';


const App = () => {
  return <>
  <Provider store = {store}>
  <div style={{width: "1000px",margin: "0 auto"}}>

    <BrowserRouter>
    <Nav/>
          <Route exact path="/" component={Home}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/orders" component={Orders}></Route>
          <Route path="/mypage" component={Mypage}></Route>
    </BrowserRouter>  
    </div></Provider>
    </>
}

export default App;
