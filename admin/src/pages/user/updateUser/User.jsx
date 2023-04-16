import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PhoneAndroid,
} from "@material-ui/icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./user.css";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/userContext/UserContext";
import { updateUser } from "../../../context/userContext/apiCalls";

export default function User() {
  const location = useLocation();
  const [user, setUser] = useState(location.state?.user);
  const { dispatch } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    setUser(location.state?.user);
  }, [location.state]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateUser(user, dispatch);
    history.push("/users");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={
                user.avatar ||
                "https://ih1.redbubble.net/image.618405117.2432/flat,1000x1000,075,f.u2.jpg"
              }
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
              <span className="userShowUserTitle">
                {user.isAdmin ? "Admin" : "User"}
              </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">18.02.2002</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">09876544321</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Da Nang | Viet Nam</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  name="username"
                  type="text"
                  defaultValue={user.username}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Avatar URL</label>
                <input
                  name="avatar"
                  type="text"
                  defaultValue={
                    user.avatar ||
                    "https://ih1.redbubble.net/image.618405117.2432/flat,1000x1000,075,f.u2.jpg"
                  }
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <button className="buttonMain" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
