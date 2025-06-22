import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>404 – Page Not Found</h1>
      <p className={styles.message}>
        The page you’re looking for doesn’t exist.
      </p>
      <button onClick={() => navigate('/')} className={styles.homeButton}>
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
