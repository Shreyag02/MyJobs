import React from 'react'
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import "./Assets/style.css";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import Login from "./Pages/Login";
import PostJobs from './Pages/PostJobs';
import ResetPassword from "./Pages/ResetPassword";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/homepage" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/forgotpassword" component={ForgotPassword}/>
          <Route exact path="/resetpassword" component={ResetPassword}/>
          <Route exact path="/jobs" component={Jobs}/>
          <Route exact path="/postjobs" component={PostJobs}/>
          <Route exact path="*" component={Home}/>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
