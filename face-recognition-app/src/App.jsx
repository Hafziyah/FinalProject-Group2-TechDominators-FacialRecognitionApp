import Navbar from "./Components/Navbar";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
//import Login from './Pages/Login';
//import signup from './Pages/SignUp';
import Landing from "./Pages/Landing";



function App() {
  return (

    
    <div className="App">

   
<BrowserRouter>
  
   
    <Navbar />
     <Switch>
    <Route path='/' exact>
    <Landing/>
    </Route>
    <Route path='/services'>
    <services/>
    </Route>
    <Route path='/Login'>
    <login/>
    </Route>
    <Route path='/sign-up'>
    <signup/>
    </Route>
    </Switch>
  
   </BrowserRouter> 

   </div>
  
  );
}

export default App;
