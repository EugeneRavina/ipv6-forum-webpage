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
          <Route path="/" element={<Home />} />
          <Route path="/charter" element={<Charter />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/news" element={<News />} />
          <Route
            path="/eventsAndPromotions"
            element={<EventsAndPromotions />}
          />
          <Route path="/affliates" element={<Affiliates />} />
          <Route path="/zoomWithExperts" element={<ZoomWithTheExperts />} />
          {/* <Route path="*" element={<NoPage />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
