import searchIcon from "../assets/icon-search.svg";
import styles from "./SearchBar.module.css";

export default function SearchBar({ light, userName, setUserName, fetchData }) {
  return (
    <>
      {light ? (
        <div className={styles.container}>
          <input
            className={styles.darkInput}
            type="text"
            placeholder="Search GitHub username..."
            onChange={(e) => {
              console.log(e.target.value);
              setUserName(e.target.value);
            }}
            value={userName}
          />
          <img src={searchIcon} alt="" className={styles.searchIcon} />
          <button
            onClick={() => {
              fetchData();
              setUserName("");
            }}
            className={styles.button}
          >
            Search
          </button>
        </div>
      ) : (
        <div className={styles.container}>
          <input
            className={styles.lightInput}
            type="text"
            placeholder="Search GitHub username..."
            onChange={(e) => {
              console.log(e.target.value);
              setUserName(e.target.value);
            }}
            value={userName}
          />
          <img src={searchIcon} alt="" className={styles.searchIcon} />
          <button
            onClick={() => {
              fetchData();
              setUserName("");
            }}
            className={styles.button}
          >
            Search
          </button>
        </div>
      )}
    </>
  );
}
