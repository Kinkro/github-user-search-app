import "./App.css";
import searchIcon from "./assets/icon-search.svg";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("octocat");
  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.github.com/users/
		${userName}`
      );
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const dateChange = (user) => {
    let date = new Date(user);
    return (user =
      date.getDate() +
      "-" +
      parseInt(date.getMonth() + 1) +
      "-" +
      date.getFullYear());
  };
  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Search GitHub username..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <div>
          <img src={searchIcon} alt="" />
          <button onClick={fetchData}>Search</button>
        </div>
      </div>
      <div>
        <img src={user.avatar_url} alt="username" />
      </div>
      <div>
        <h2>{user.name}</h2>
        <h4>{user.login}</h4>
        <p>{user.bio ? user.bio : "This profile has no bio"}</p>
      </div>
      <div>Joined: {dateChange(user.created_at)}</div>
    </div>
  );
}

export default App;
