import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/apiCalls";

export default function ListList() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete this list?"))
      deleteList(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "list",
      headerName: "List Title",
      width: 250,
      renderCell: (params) => {
        return <div className="listItem">{params.row.title}</div>;
      },
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            {params.row.genre.charAt(0).toUpperCase() +
              params.row.genre.slice(1)}
          </div>
        );
      },
    },
    {
      field: "type",
      headerName: "Type",
      renderCell: (params) => {
        return (
          <div>
            {params.row.type.charAt(0).toUpperCase() + params.row.type.slice(1)}
          </div>
        );
      },
      width: 110,
    },

    {
      field: "action",
      headerName: (
        <div className="titleContainer">
          <Link to="/newlist">
            <button className="addButton">Create New List</button>
          </Link>
        </div>
      ),
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: "/list/" + params.row._id,
                state: { list: params.row },
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
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
