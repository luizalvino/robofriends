import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
// import "./App.css";

import { setSearchField, requestRobots } from "../actions";
import Header from "../components/Header";

const App = () => {
  const { searchField, robots, isPending } = useSelector((state) => {
    return {
      searchField: state.searchRobots.searchField,
      robots: state.requestRobots.robots,
      isPending: state.requestRobots.isPending,
      error: state.requestRobots.error,
    };
  });
  const dispatch = useDispatch();
  const onSearchChange = (event) =>
    dispatch(setSearchField(event.target.value));

  useEffect(() => {
    import("tachyons");
    import("./App.css");
  }, []);

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
