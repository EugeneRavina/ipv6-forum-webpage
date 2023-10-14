import React from 'react';
import './App.css';
import './index.css';
import Navigation from './shared/components/navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Affiliates from './pages/affiliates';
import News from './pages/news';
import Charter from './pages/charter';
import Mission from './pages/mission';
import Milestones from './pages/milestones';
import EventsAndPromotions from './pages/eventsAndPromotion';
import ZoomWithTheExperts from './pages/zoomWithExperts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/ipv6-forum-webpage/" element={<Home />} />
          <Route path="/ipv6-forum-webpage/charter" element={<Charter />} />
          <Route path="/ipv6-forum-webpage/mission" element={<Mission />} />
          <Route
            path="/ipv6-forum-webpage/milestones"
            element={<Milestones />}
          />
          <Route path="/ipv6-forum-webpage/news" element={<News />} />
          <Route
            path="/ipv6-forum-webpage/eventsAndPromotions"
            element={<EventsAndPromotions />}
          />
          <Route
            path="/ipv6-forum-webpage/affliates"
            element={<Affiliates />}
          />
          <Route
            path="/ipv6-forum-webpage/zoomWithExperts"
            element={<ZoomWithTheExperts />}
          />
          {/* <Route path="*" element={<NoPage />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
