import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Screens

import EmployeeDashboard from "./components/screens/employeeDashboard/EmployeeDashboard";
import ForgetPassword from "./components/screens/forgetPassword/ForgetPassword";
import ResetPassword from "./components/screens/resetPassword/ResetPassword";



import RegisterScreen from "./components/screens/RegisterScreen";


import Addservices from "./components/screens/addservicesLayout";
import AddcatagoriesLayout from "./components/screens/addcatagoriesLayout";

import viewprofile from "./components/screens/viewprofile";


import RegisterScreenp from "./components/screens/Registeradmin";
import PPPP from "./components/screens/PPP";
import  category from "./components/screens/category";
import  workerorder from "./components/screens/workerorder";
import  workerorderdetail from "./components/screens/workerorderdetail";

import  order from "./components/screens/order";

import placeorder from "./components/screens/placeorder";


import  workerlist from "./components/screens/workerlist";


import  Addworkerlist from "./components/screens/addworker";
import { Login } from "./components/screens/login";
import Navbar from './components/screens/navbar';
import Update_profile from "./components/screens/update_profile";
import Footer from './components/screens/footer';
import WorkerCard from "./components/screens/worker_card";
import Homepage from "./components/screens/homepage";
// import sidebarTEMP from "./components/screens/sidebarTEMP";
import addworkerLayout_admin from "./components/screens/addworkerLayout_admin"

const App = () => {
  return (
    <Router>
      <div className="app">
      
        <Navbar/>
    <div className="container align-left">
    </div>

        <Switch>
          
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/registerp" component={RegisterScreenp} />
          <Route exact path="/register" component={RegisterScreen} />

        {/* admin pages */}
          <Route exact path="/Addservices" component={Addservices} />
          <Route exact path="/Addcategories" component={AddcatagoriesLayout} />
          <Route exact path="/pppp" component={PPPP} />
          <Route exact path="/category/:q" component={category} />
          <Route exact path="/worker/:q" component={workerlist} />
          <Route exact path="/addworker" component={addworkerLayout_admin} />
          {/* <Route exact path="/addworker" component={Addworkerlist} /> */}

          {/* customer and worker - in progress */}
          <Route exact path="/workerorder/:q" component={workerorder} />
          <Route exact path="/workerorderdetail/:q" component={workerorderdetail} />
          <Route exact path="/viewprofile/:q" component={viewprofile} />
          <Route exact path="/order/:q" component={order} />
          <Route exact path="/worker_card" component={WorkerCard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/update_profile" component={Update_profile} />
          <Route exact path="/placeorder/:q" component={placeorder} />
          <Route exact path="/employeeDashboard" component = {EmployeeDashboard} />
          <Route exact path="/resetPassword" component = {ResetPassword} />
          <Route exact path="/forgetPassword" component = {ForgetPassword} />
        </Switch>
        {/* <Footer/> */}
      </div>
    </Router>
  );
};

export default App;
