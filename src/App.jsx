import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AirportDetailPage from './pages/AirportDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Spinner from './components/Spinner';
import { Suspense } from 'react';
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/airport/:code" element={<AirportDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
