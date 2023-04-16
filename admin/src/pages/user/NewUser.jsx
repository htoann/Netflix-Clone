import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { createUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

export default function NewUser() {
  const [user, setUser] = useState(null);
  const { dispatch } = useContext(UserContext);
  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(user, dispatch);
    history.push("/users");
  };

  return (
    <div className="wrap">
      <h1 className="title">New User</h1>
      <form className="formNewUser">
        <div className="item">
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="John"
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="john@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label>Role</label>
          <select name="isAdmin">
            <option value="true">Admin</option>
            <option value="false">User</option>
          </select>
        </div>
        <button
          className="buttonMain buttonMainNewUser"
          onChange={handleSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
}
