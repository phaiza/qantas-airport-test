import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AirportDetailPage from './pages/AirportDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/airport/:code" element={<AirportDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
