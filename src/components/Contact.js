import styles from "./Contact.module.css";

export default function Contact({ light, user, src, href }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={src} alt="" />

      {user ? (
        <a
          className={
            !light ? styles.anchor : `${styles.anchor} ${styles.darkAnchor}`
          }
          href={href}
          target="_blank"
        >
          {user}
        </a>
      ) : (
        <a
          className={`${styles.anchor} ${styles.notAvailable}`}
          href={href}
          target="_blank"
        >
          Not Available
        </a>
      )}
    </div>
  );
}
