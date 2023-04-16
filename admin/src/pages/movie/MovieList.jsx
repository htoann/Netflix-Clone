import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export default function MovieList() {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete this movie?"))
      deleteMovie(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "movie",
      headerName: "Movie",
      width: 350,
      renderCell: (params) => {
        return (
          <div className="listItem">
            <img className="listImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 120,
      renderCell: (params) => {
        return <div>{capitalizeFirstLetter(params.row.genre)}</div>;
      },
    },
    { field: "year", headerName: "Year", width: 110 },
    { field: "limit", headerName: "Limit", width: 110 },
    {
      field: "isSeries",
      headerName: "Type",
      renderCell: (params) => {
        return <div>{params.row.isSeries ? "Series" : "Movie"}</div>;
      },
      width: 130,
    },

    {
      field: "action",
      headerName: (
        <div className="titleContainer">
          <Link to="/newmovie">
            <button className="addButton">Create New Movie</button>
          </Link>
        </div>
      ),
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: "/movie/" + params.row._id,
                state: { movie: params.row },
              }}
            >
              <button className="listEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="listDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="list">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
