import styles from "./GitHubInfo.module.css";

export default function GitHubInfo({ user, name }) {
  return (
    <div className={styles.container}>
      <h5 className={styles.name}>{name}</h5>
      <span className={styles.quantity}>{user}</span>
    </div>
  );
}
