import searchIcon from "../assets/icon-search.svg";
import styles from "./SearchBar.module.css";

export default function SearchBar({ userName, setUserName, fetchData }) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search GitHub username..."
        onChange={(e) => {
          console.log(e.target.value);
          setUserName(e.target.value);
        }}
      />
      <img src={searchIcon} alt="" className={styles.searchIcon} />
      <button onClick={fetchData} className={styles.button}>
        Search
      </button>
    </div>
  );
}
