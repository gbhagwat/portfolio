/* eslint-disable jsx-a11y/anchor-is-valid */
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Resume } from './Pages/Resume';
import { UxCaseStudies } from './Pages/UxCaseStudies';
import { InformationArchitecture } from './Pages/InformationArchitecture';
import { UserResearch } from './Pages/UserResearch';
import { UxPrinciples } from './Pages/UxPrinciples';
import { UsabilityStudy } from './Pages/UsabilityStudy';

import { Link, Routes, Route } from 'react-router-dom';
import logo from '../src/logo.png';

function App() {
  return (
    <div className="container mx-auto">
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link className="nav-link" to="/about">About</Link></li>
              <li>
                <a className="nav-link">Projects</a>
                <ul className="p-2">
                  <li><Link className="nav-link" to="/ux-case-studies">UX Case Studies</Link></li>
                  <li><Link className="nav-link" to="/information-architecture" href="#">Information Architecture</Link></li>
                  <li><Link className="nav-link" to="/ux-principles">UX Practices & Principles</Link></li>
                  <li><Link className="nav-link" to="/usability-study">Usability Study</Link></li>
                  <li><Link className="nav-link" to="/user-research">User Research</Link></li>    
                </ul>
              </li>
              <li><Link className="nav-link" to="/resume">Resume</Link></li>
              </ul>
          </div>
          <Link to="/">
          <img src={logo} alt="Brand logo of Gabrielle Bhagwat's portfolio" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><Link className="nav-link" to="/about">About</Link></li>
          <li>
              <details>
                <summary className="nav-link">Projects</summary>
                <ul className="p-2">
                  <li><Link className="nav-link" to="/ux-case-studies">UX Case Studies</Link></li>
                  <li><Link className="nav-link" to="/information-architecture" href="#">Information Architecture</Link></li>
                  <li><Link className="nav-link" to="/ux-principles">UX Practices & Principles</Link></li>
                  <li><Link className="nav-link" to="/usability-study">Usability Study</Link></li>
                  <li><Link className="nav-link" to="/user-research">User Research</Link></li>   
                </ul>
              </details>
            </li>
            <li><Link className="nav-link" to="/resume">Resume</Link></li>
            </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/ux-case-studies" element={<UxCaseStudies />} />
        <Route path="/information-architecture" element={<InformationArchitecture />} />
        <Route path="/user-research" element={<UserResearch />} />
        <Route path="/ux-principles" element={<UxPrinciples />} />        
        <Route path="/usability-study" element={<UsabilityStudy />} />                
      </Routes>
    </div>
  );
}

export default App;