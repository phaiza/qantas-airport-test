import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AirportDetailPage from './pages/AirportDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Spinner from './components/Spinner';
import { Suspense } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/airport/:code" element={<AirportDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
