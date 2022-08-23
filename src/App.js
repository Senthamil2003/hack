
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Loginfun from './component/signin/Login';
import Nav from "./component/nav/Nav"
import MainTest from './component/teststatic/MainTest';

import BeforeTest from './component/teststatic/BeforeTest';
import Greet from "./component/greet/greet"
import Questions from './component/Testqstn/questions';
import Dashboard from './component/Main/Dashoard';
import Testdash from './component/teststatic/testdashacadamics';
import Feedback from './component/teststatic/testdashfeedback';
import Tdash from './componentteachers/teachersdash/tdash';
import Report from './component/report/Report';
import Roadmap from './component/Roadmap/Roadmap';



function App() {

  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Greet />} />
          <Route path="/signup" element={<Loginfun />} />
          <Route path="/student" element={<Nav />} >
            <Route path="/student/dashboard" element={<Dashboard />} />
            <Route path="/student/acadamics" element={<Testdash />} />
            <Route path="/student/acadamics/feedback" element={<Feedback />} />
            <Route path="/student/material" element={<Report />} />
            <Route path="/student/roadmap" element={<Roadmap />} />
            


          </Route>
          <Route path="/test/beforetst" element={<BeforeTest />} />

          <Route path="/test/main" element={<MainTest />} >

                           
            <Route path="/test/main/questions" element={<Questions />} />

          </Route>
          <Route path="/teachers" element={<Tdash />} />












        </Routes>

      </Router>

    </div>
  );
}

export default App;
