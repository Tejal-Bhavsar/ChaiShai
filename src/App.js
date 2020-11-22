 import React from 'react';
 import Chais from './Chais'
 import Gallary from './Gallary'

 
  
 
import './App.css';
import Navbar from './Navbar'

function App() {
  return (
     
    <div>
      <Navbar />
      <Chais />
       <Gallary /> 
      {/* <Contact Us /> */} 
  
      {/* <Switch>
            <Route exact path="/" component={Navbar} />
            <Route exact path="/chais" component={Chais} />
            <Route exact path="/" component={Gallary} />
        </Switch> */}
    </div>
    // </Router>
  );
}

export default App;
