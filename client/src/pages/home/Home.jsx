import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Footer from "../../components/footer/Footer";
import { getAll } from "../../services/getAll";

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
