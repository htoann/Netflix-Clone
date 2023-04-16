import { useContext, useEffect, useState } from "react";
import { createList } from "../../context/listContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";
import { useHistory } from "react-router-dom";
import { getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function NewList() {
  const history = useHistory();
  const [list, setList] = useState(null);

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovies } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createList(list, dispatch);
    history.push("/lists");
  };

  useEffect(() => {
    getMovies(dispatchMovies);
  }, [dispatchMovies]);

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setList({ ...list, [e.target.name]: value });
  };

  return (
    <div className="wrap">
      <h1 className="title">New List</h1>
      <form className="form">
        <div className="mid">
          <div className="left">
            <div className="item">
              <label>List Title</label>
              <input
                type="text"
                name="title"
                placeholder="Best Drama Series"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label>Genre</label>
              <input
                type="text"
                name="genre"
                placeholder="Action"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label>Type</label>
              <input
                name="type"
                type="text"
                onChange={handleChange}
                placeholder="Movie"
              />
            </div>
          </div>
          <div className="right">
            <div className="item">
              <label>List Movies (Ctrl + click to choose)</label>
              <select
                className="selectContent"
                multiple
                name="content"
                onChange={handleSelect}
              >
                {movies.map((movie) => (
                  <option value={movie._id} key={movie._id}>
                    {movie.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <button className="buttonMain" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
