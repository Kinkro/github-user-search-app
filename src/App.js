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

function App() {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("octocat");
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
  // 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 >>>>gh token
  useEffect(() => {
    fetchData();
  }, []);

  console.log(user);
  const dateChange = (user) => {
    let date = new Date(user);
    return (user =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear());
  };
  return (
    <div className="App">
      <div className="componentContainer">
        <SearchBar
          className="gap"
          fetchData={fetchData}
          setUserName={setUserName}
          userName={userName}
        />
        <UserBio dateChange={dateChange} user={user} />
        <div className="mainContent">
          <div className="gitHubInfo">
            {gitHubInfo.map((info) => (
              <GitHubInfo name={info.name} user={info.user} />
            ))}
          </div>
        </div>
        <div className="grid">
          {contacts.map((contact) => (
            <Contact
              src={contact.src}
              user={contact.user}
              href={contact.href}
            />
          ))}
        </div>
      </div>
    </div>
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
