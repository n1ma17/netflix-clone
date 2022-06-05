import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "./Request";
import Row from "./Row";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginal}
        isLargeRow
      />
      <Row
        title="Trending"
        fetchURL={requests.fetchTrending}
      />
      {/* <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      /> */}
    </div>
  );
};

export default HomeScreen;
