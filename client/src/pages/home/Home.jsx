import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { axiosInstance } from "../../assets/js/axiosInstance";
import Footer from "../../components/footer/Footer";
import { configHeaderToken } from "../../assets/js/configHeaderToken";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRandomLists = async () => {
      setIsLoading(true);
      try {
        const result = await axiosInstance.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          configHeaderToken
        );
        setIsLoading(false);
        setLists(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
    return () => {
      setLists([]);
    };
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      {!isLoading ? (
        <>
          <Featured type={type} setGenre={setGenre} />
          <div className="listContainerMid">
            {lists.map((list, key) => (
              <List list={list} key={key} />
            ))}
          </div>
          <Footer />
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Home;
