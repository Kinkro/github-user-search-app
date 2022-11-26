import sunIcon from "../assets/icon-sun.svg";
import moonIcon from "../assets/icon-moon.svg";
import styles from "./DarkLight.module.css";

export default function DarkLight({ light, handleClick }) {
  return (
    <div className={styles.titleContainer}>
      {light ? (
        <h1 className={styles.lightTitle}>devFinder</h1>
      ) : (
        <h1 className={styles.darkTitle}>devFinder</h1>
      )}
      <div className={styles.darkLight} onClick={handleClick}>
        {light ? (
          <>
            <span className={styles.dark}>DARK</span>
            <img
              className={styles.darkLightIcons}
              src={moonIcon}
              alt="dark-light"
            />
          </>
        ) : (
          <>
            <span className={styles.light}>LIGHT</span>
            <img
              className={styles.darkLightIcons}
              src={sunIcon}
              alt="dark-light"
            />
          </>
        )}
      </div>
    </div>
  );
}
