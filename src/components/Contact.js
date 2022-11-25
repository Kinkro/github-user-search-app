import styles from "./Contact.module.css";

export default function Contact({ user, src, href }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={src} alt="" />
      <a className={styles.anchor} href={href} target="_blank">
        {user}
      </a>
    </div>
  );
}
