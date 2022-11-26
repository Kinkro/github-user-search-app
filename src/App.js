import "./App.css";

import locationIcon from "./assets/icon-location.svg";
import githubIcon from "./assets/icon-company.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import websiteIcon from "./assets/icon-website.svg";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import UserBio from "./components/UserBio";
import { useState, useEffect } from "react";
import GitHubInfo from "./components/GitHubInfo";
import Contact from "./components/Contact";
import DarkLight from "./components/DarkLight";
// import sunIcon from "./assets/icon-sun.svg";
// import moonIcon from "./assets/icon-moon.svg";

function App() {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("octocat");
  const [light, setLight] = useState(false);
  const gitHubInfo = [
    {
      name: "Repos",
      user: user.public_repos,
    },
    {
      name: "Followers",
      user: user.followers,
    },
    {
      name: "Following",
      user: user.following,
    },
  ];

  const contacts = [
    {
      src: locationIcon,
      user: user.location,
      href: `https://en.wikipedia.org/wiki/${user.location}`,
    },
    {
      src: twitterIcon,
      user: user.twitter_username,
      href: user.twitter_username,
    },
    {
      src: websiteIcon,
      user: user.html_url,
      href: user.html_url,
    },
    {
      src: githubIcon,
      user: user.company,
      href: user.company,
    },
  ];

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    fetchData();
    // const listener = (event) => {
    //   if (event.code === "Enter" || event.code === "NumpadEnter") {
    //     event.preventDefault();
    //     // callMyFunction();
    //   }
    // };
    // document.addEventListener("keydown", listener);
    // return () => {
    //   document.removeEventListener("keydown", listener);
    // };
  }, []);

  const dateChange = (user) => {
    let date = new Date(user);
    return (user =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear());
  };

  const handleClick = () => {
    setLight(!light);
  };
  console.log(light);
  return (
    <>
      {light ? (
        <div className="App lightApp">
          <DarkLight handleClick={handleClick} light={light} />
          <SearchBar
            // className="gap"
            fetchData={fetchData}
            setUserName={setUserName}
            userName={userName}
            light={light}
          />
          <div className="componentContainer">
            <div className="imgContainer">
              <img className="img" src={user.avatar_url} alt="username" />
            </div>
            <UserBio
              className="userBio"
              dateChange={dateChange}
              user={user}
              light={light}
            />
            <div className="mainContent">
              <div className={!light ? "gitHubInfo" : "gitHubInfo lightGHInfo"}>
                {gitHubInfo.map((info) => (
                  <GitHubInfo
                    light={light}
                    key={info.name}
                    name={info.name}
                    user={info.user}
                  />
                ))}
              </div>

              <div className="grid">
                {contacts.map((contact) => (
                  <Contact
                    light={light}
                    key={contact.src}
                    src={contact.src}
                    user={contact.user}
                    href={contact.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="App">
          <DarkLight handleClick={handleClick} light={light} />
          <SearchBar
            // className="gap"
            fetchData={fetchData}
            setUserName={setUserName}
            userName={userName}
            light={light}
          />
          <div className="componentContainer darkCompCont">
            <div className="imgContainer">
              <img className="img" src={user.avatar_url} alt="username" />
            </div>
            <UserBio
              className="userBio"
              dateChange={dateChange}
              user={user}
              light={light}
            />
            <div className="mainContent">
              <div className="gitHubInfo">
                {gitHubInfo.map((info) => (
                  <GitHubInfo
                    light={light}
                    key={info.name}
                    name={info.name}
                    user={info.user}
                  />
                ))}
              </div>

              <div className="grid">
                {contacts.map((contact) => (
                  <Contact
                    light={light}
                    key={contact.src}
                    src={contact.src}
                    user={contact.user}
                    href={contact.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

// BEFORE//

{
  /* <div>
          <div>
            <img src={locationIcon} alt="" />
            <a href="#">{user.location}</a>
          </div>
          <div>
            <img src={websiteIcon} alt="" />
            <a href="#">{user.location}</a>
          </div>
          <div>
            <img src={githubIcon} alt="" />
            <a href={user.url}>{user.url}</a>
          </div>
          <div>
            <img src={twitterIcon} alt="" />
            <a href="#">
              {user.twitter_username ? user.twitter_username : "Not available"}
            </a>
          </div>
        </div> */
}

{
  /* <GitHubInfo name="Repos" user={user.public_repos} />
            <GitHubInfo name="Followers" user={user.followers} />
            <GitHubInfo name="Following" user={user.following} /> */
}
