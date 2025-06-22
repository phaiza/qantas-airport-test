import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AirportDetailPage from './pages/AirportDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/airport/:code" element={<AirportDetailPage />} />
    </Routes>
  );
}

export default App;
