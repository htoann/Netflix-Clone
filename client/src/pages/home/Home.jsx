import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { configHeaderToken } from "../../assets/js/configHeaderToken";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const result = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          configHeaderToken
        );
        setLists(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      <div className="listContainerMid">
        {lists.map((list, key) => (
          <List list={list} key={key} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
