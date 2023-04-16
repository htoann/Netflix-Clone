import { useContext, useState } from "react";
import "./newMovie.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { createMovie } from "../../../context/movieContext/apiCalls";
import { MovieContext } from "../../../context/movieContext/MovieContext";
import firebaseApp from "../../../utils/firebaseConfig";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewMovie() {
  firebaseApp();
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const history = useHistory();
  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    const tasks = items.map((item) => {
      const storage = getStorage();
      const fileName = new Date().getTime() + item.label;

      const storageRef = ref(storage, "items/" + fileName);
      const uploadTask = uploadBytesResumable(storageRef, item.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: downloadURL };
            });
          });
        }
      );

      return uploadTask;
    });

    Promise.all(tasks).then(() => {
      toast.success("😎 Upload successfully!", {
        autoClose: 2000,
      });
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (img || imgSm || trailer || video)
      toast("😎 Uploading file ...", {
        autoClose: 5000,
      });
    upload([
      img ? { file: img, label: "img" } : "",
      imgSm ? { file: imgSm, label: "imgSm" } : "",
      trailer ? { file: trailer, label: "trailer" } : "",
      video ? { file: video, label: "video" } : "",
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMovie(movie, dispatch);
    history.push("/movies");
  };

  return (
    <div className="wrap">
      <h1 className="title">New Movie</h1>
      <form className="form">
        <div className="mid">
          <div className="left">
            <div className="item itemNewMovie">
              <label>Title</label>
              <input
                type="text"
                name="title"
                placeholder="The Godfather"
                onChange={handleChange}
              />
            </div>
            <div className="item itemNewMovie">
              <label>Image</label>
              <input
                type="text"
                name="img"
                placeholder="https://movieimage.jpg"
                onChange={handleChange}
              />
              <input
                type="file"
                name="img"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
            <div className="item itemNewMovie">
              <label>Thumbnail</label>
              <input
                type="text"
                name="imgSm"
                placeholder="https://thumbnai.jpg"
                onChange={handleChange}
              />
              <input
                type="file"
                name="imgSm"
                onChange={(e) => setImgSm(e.target.files[0])}
              />
            </div>
            <div className="item itemNewMovie">
              <label>Genre</label>
              <input
                type="text"
                name="genre"
                placeholder="Action"
                onChange={handleChange}
              />
            </div>
            <div className="item itemNewMovie">
              <label>Type</label>
              <select name="isSeries" id="isSeries" onChange={handleChange}>
                <option value="false">Movie</option>
                <option value="true">Series</option>
              </select>
            </div>
          </div>
          <div className="right">
            <div className="item itemNewMovie">
              <label>Trailer</label>
              <input
                type="text"
                name="trailer"
                placeholder="https://trailer.mp4"
                onChange={handleChange}
              />
              <input
                type="file"
                name="trailer"
                onChange={(e) => setTrailer(e.target.files[0])}
              />
            </div>
            <div className="item itemNewMovie">
              <label>Video</label>
              <input
                type="text"
                name="video"
                placeholder="https://video.mp4"
                onChange={handleChange}
              />
              <input
                type="file"
                name="video"
                onChange={(e) => setVideo(e.target.files[0])}
              />
            </div>
            <div className="item itemNewMovie">
              <label>Limit</label>
              <input
                type="text"
                name="limit"
                placeholder="16+"
                onChange={handleChange}
              />
            </div>
            <div className="item itemNewMovie">
              <label>Year</label>
              <input
                type="text"
                name="year"
                placeholder="2022"
                onChange={handleChange}
              />
            </div>
            <div className="item itemNewMovie">
              <label>Description</label>
              <textarea
                type="text"
                name="desc"
                placeholder="The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son."
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button className="buttonMain" onClick={handleUpload}>
          Upload File
        </button>
        <button className="buttonMain" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
