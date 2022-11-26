import styles from "./GitHubInfo.module.css";

export default function GitHubInfo({ light, user, name }) {
  return (
    <div className={styles.container}>
      <h5
        className={!light ? styles.name : `${styles.name} ${styles.darkName}`}
      >
        {name}
      </h5>
      <span
        className={
          !light ? styles.quantity : `${styles.quantity} ${styles.darkQuantity}`
        }
      >
        {user}
      </span>
    </div>
  );
}
