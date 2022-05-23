import React, { useEffect, useState } from "react";
import "../static/sass/pages/home.scss";

import { getAll } from "../services/getAll";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import List from "../components/List";
import Footer from "../components/Footer";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAll(genre, setGenre, type, setIsLoading, setLists);
  }, [genre, type]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="listContainerMid">
            {lists.map((list, key) => (
              <List list={list} key={key} type={type} />
            ))}
          </div>
          <div className={lists.length === 0 ? "lists_null" : ""}>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
