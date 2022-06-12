import React from "react";
import "./HomeScreen.css";
import Nav from "components/Nav";
import Banner from "components/Banner";
import Row from "components/Row";
import requests from "../../Request";

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
