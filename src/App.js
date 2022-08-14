import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [robots, setRobotos] = useState([]);
  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setRobotos(data));
  }, [robots]);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />;
      </Scroll>
    </div>
  );
};

export default App;
