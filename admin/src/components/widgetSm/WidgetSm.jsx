import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useContext, useEffect } from "react";
import { getNewUsers } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

export default function WidgetSm() {
  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getNewUsers(dispatch);
  }, [dispatch]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.profilePic ||
                "https://ih1.redbubble.net/image.618405117.2432/flat,1000x1000,075,f.u2.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <div>({user.isAdmin ? "Admin" : "User"})</div>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
