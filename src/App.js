import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import CreateMeetup from './pages/create-meetup';
import Home from './pages/home';
import Login from './pages/login';
import Explore from './pages/explore';

function App() {
  return (
    <div className="w-full h-full bg-gray-200">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/create-meetup" element={<CreateMeetup />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
