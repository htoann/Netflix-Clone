import { useHistory, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { updateList } from "../../context/listContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from "../../context/movieContext/apiCalls";

export default function List() {
  const location = useLocation();
  const history = useHistory();

  const [list, setMovie] = useState(location.state?.list);
  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovies } = useContext(MovieContext);

  useEffect(() => {
    setMovie(location.state?.list);
    getMovies(dispatchMovies);
  }, [location.state, dispatchMovies]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateList(list, dispatch);
    history.push("/lists");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMovie({ ...list, [e.target.name]: e.target.value });
  };

  return (
    <div className="wrapUpdate">
      <div className="topUpdate">
        <div className="topRightUpdate">
          <div className="infoTopUpdate">
            <span className="nameUpdate">{list.title}</span>
          </div>
          <div className="infoBottomUpdate">
            <div className="infoItemUpdate">
              <span className="infoKeyUpdate">ID : </span>
              <span className="infoValueUpdate">{list._id}</span>
            </div>
            <div className="infoItemUpdate">
              <span className="infoKeyUpdate">Genre : </span>
              <span className="infoValueUpdate">
                {list.genre.charAt(0).toUpperCase() + list.genre.slice(1)}
              </span>
            </div>
            <div className="infoItemUpdate">
              <span className="infoKeyUpdate">Type : </span>
              <span className="infoValueUpdate">
                {list.type.charAt(0).toUpperCase() + list.type.slice(1)}
              </span>
            </div>
            <div className="infoItemUpdate">
              <span className="infoKeyUpdate">List Movies : </span>
              <div className="itemUpdate">
                {list.content.map((id, key) => (
                  <div key={key} className="infoValueUpdate">
                    {movies.map((movie) => (
                      <div key={movie._id}>
                        {movie._id === id[0] ? movie.title : ""}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomUpdate">
        <form className="updateFormUpdate">
          <div className="formLeftUpdate">
            <label>Movie Title</label>
            <input
              type="text"
              name="title"
              defaultValue={list.title}
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              defaultValue={list.genre}
              onChange={handleChange}
            />
            <label>Type</label>
            <input
              type="text"
              name="type"
              onChange={handleChange}
              defaultValue={list.type}
            />
            <button className="buttonMain" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
