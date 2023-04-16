import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/user/userList/UserList";
import User from "./pages/user/updateUser/User";
import NewUser from "./pages/user/NewUser";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Movie from "./pages/movie/Movie";
import MovieList from "./pages/movie/MovieList";
import NewMovie from "./pages/movie/newMovie/NewMovie";
import ListList from "./pages/list/ListList";
import NewList from "./pages/list/NewList";
import List from "./pages/list/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/">
          {user ? (
            <>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/movies">
                  <MovieList />
                </Route>
                <Route path="/movie/:movieId">
                  <Movie />
                </Route>
                <Route path="/newmovie">
                  <NewMovie />
                </Route>
                <Route path="/lists">
                  <ListList />
                </Route>
                <Route path="/newlist">
                  <NewList />
                </Route>
                <Route path="/list/:listId">
                  <List />
                </Route>
                <Route path="/users">
                  <UserList />
                </Route>
                <Route path="/user/:userId">
                  <User />
                </Route>
                <Route path="/newUser">
                  <NewUser />
                </Route>
              </div>
            </>
          ) : (
            <Login />
          )}
        </Route>
      </Switch>
      <ToastContainer autoClose={2000} />
    </Router>
  );
}

export default App;
