
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Loginfun from './component/signin/Login';
import Nav from "./component/nav/Nav"
import MainTest from './component/teststatic/MainTest';

import BeforeTest from './component/teststatic/BeforeTest';
import Greet from "./component/greet/greet"
import Qstn1 from './component/Testqstn/qstn1';
import Dashboard from './component/Main/Dashoard';
import Testdash from './component/teststatic/testdash';



function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Greet />} />
          <Route path="/signup" element={<Loginfun />} />
          <Route path="/student" element={<Nav />} >
            <Route path="/student/dashboard" element={<Dashboard />} />
            <Route path="/student/test" element={<Testdash />} />


          </Route>
          <Route path="/test/beforetst" element={<BeforeTest />} />

          <Route path="/test/main" element={<MainTest />} >


            <Route path="/test/main/qs1" element={<Qstn1 />} />

          </Route>











        </Routes>

      </Router>

    </div>
  );
}

export default App;
