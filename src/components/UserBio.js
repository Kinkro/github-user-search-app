import styles from "./UserBio.module.css";

export default function UserBio({ user, dateChange }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={user.avatar_url} alt="username" />
      </div>
      <div className={styles.info}>
        <h2>{user.name}</h2>
        <h4 className={styles.nickname}>{user.login}</h4>
        <p
          className={
            user.bio ? `${styles.bio}` : `${styles.bio} ${styles.noBio}`
          }
        >
          {user.bio ? user.bio : "This profile has no bio"}
        </p>
      </div>
      <div className={styles.time}>Joined: {dateChange(user.created_at)}</div>
    </div>
  );
}
