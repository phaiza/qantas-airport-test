import styles from './Spinner.module.scss';
const Spinner = () => (
  <div className={styles.spinnerContainer} role="status">
    <div className={styles.spinner} />
    <p>Loading airports...</p>
  </div>
);

export default Spinner;
