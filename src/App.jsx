import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import mainLogo from './assets/images/lockistry-logo-white.png';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import LatestPage from './pages/LatestPage';      // parent Latest page
import LatestPost from './components/LatestPost'; // dynamic post page
import LockInfoPage from './pages/LockInfoPage';
import PickInfoPage from './pages/PickInfoPage';
import LockInfo from './pages/LockInfo';

// Wrapper to scroll to top on route change
const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <>
      <Header logo={mainLogo} />
      <main className="main-content">
        <Wrapper>
          <Routes>
            {/* Standard pages */}
            <Route path="/" element={<Home />} />
            <Route path="/lockinfo" element={<LockInfoPage />} />
            <Route path="/pickinfo" element={<PickInfoPage />} />

            {/* Parent Latest page */}
            <Route path="/latest" element={<LatestPage />} />

            {/* Dynamic individual post pages */}
            <Route path="/latest/:postId" element={<LatestPost />} />

            {/* Lock info pages */}
            <Route path="/locks/:type" element={<LockInfo />} />
          </Routes>
        </Wrapper>
      </main>
      <Footer logo={mainLogo} />
    </>
  );
}

export default App;