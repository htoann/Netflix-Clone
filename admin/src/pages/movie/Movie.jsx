import { useHistory, useLocation } from "react-router-dom";
import { Publish } from "@material-ui/icons";
import { useContext, useState, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovie } from "../../context/movieContext/apiCalls";

export default function Movie() {
  const location = useLocation();
  const [movie, setMovie] = useState(location.state?.movie);
  const { dispatch } = useContext(MovieContext);
  const history = useHistory();

  useEffect(() => {
    setMovie(location.state?.movie);
  }, [location.state]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateMovie(movie, dispatch);
    history.push("/movies");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  return (
    <div className="wrapUpdate">
      <div className="topUpdate">
        <div className="topRightUpdate">
          <div className="infoTopUpdate">
            <img src={movie.img} alt="" className="infoImgUpdate" />
            <span className="nameUpdate">{movie.title}</span>
          </div>
          <div className="infoBottomUpdate">
            <div className="infoItemUpdate">
              <span className="infoKeyUpdate">ID : </span>
              <span className="infoValueUpdate">{movie._id}</span>
            </div>
            <div className="infoItemUpdate">
              <span className="infoKeyUpdate">Genre : </span>
              <span className="infoValueUpdate">
                {movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}
              </span>
            </div>
            <div className="infoItemUpdate">
              <span className="infoKeyUpdate">Year : </span>
              <span className="infoValueUpdate">{movie.year}</span>
            </div>
            <div className="infoItemUpdate">
              <span className="infoKeyUpdate">Limit : </span>
              <span className="infoValueUpdate">{movie.limit}</span>
            </div>
            <div className="infoItemUpdate">
              <span className="infoKeyUpdate">Trailer Link: </span>
              <span className="infoValueUpdate">{movie.trailer}</span>
            </div>
            <div className="infoItemUpdate">
              <span className="infoKeyUpdate">Video Link : </span>
              <span className="infoValueUpdate">{movie.video}</span>
            </div>
            <div className="infoItemUpdate">
              <span className="infoKeyUpdate">Type : </span>
              <span className="infoValueUpdate">
                {movie.isSeries ? "Season" : "Movie"}
              </span>
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
              defaultValue={movie.title}
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              defaultValue={movie.genre}
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              type="text"
              name="year"
              defaultValue={movie.year}
              onChange={handleChange}
            />
            <label>Limit</label>
            <input
              type="text"
              name="limit"
              defaultValue={movie.limit}
              onChange={handleChange}
            />
            <label>Trailer</label>
            <input
              type="text"
              name="trailer"
              defaultValue={movie.trailer}
              onChange={handleChange}
            />
            <label>Video</label>
            <input
              type="text"
              name="video"
              defaultValue={movie.video}
              onChange={handleChange}
            />
            <label>Type</label>
            <select
              name="isSeries"
              id="isSeries"
              onChange={handleChange}
              defaultValue={movie.isSeries}
            >
              <option value="false">Movie</option>
              <option value="true">Series</option>
            </select>
          </div>
          <div className="formRightUpdate">
            <div className="updateUpdate">
              <img src={movie.img} alt="" className="uploadImgUpdate" />
              <label htmlFor="file">
                <Publish />
              </label>
            </div>
            <button className="buttonMain" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
