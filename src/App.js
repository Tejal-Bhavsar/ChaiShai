 import React from 'react';
 import Chais from './Chais'
 import Gallary from './Gallary'
 import Home from './Home'
 import { Switch,Route} from 'react-router-dom'
 import Footer from './Footer'
import './App.css'
import Navbar from './Navbar'
import Bagslogan from './Bagslogan';

function App() {
  return (
     
    <div>
      <Navbar />
      {/* <Bagslogan />
      <Chais />
      <Gallary /> */}
      
      {/* <Contact Us /> */} 
  
      <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chais" component={Chais} />
            <Route exact path="/gallary" component={Gallary} />
      </Switch>
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
