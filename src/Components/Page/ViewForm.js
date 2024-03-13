import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletereviewdata, getreviewdata } from "../Redux/ApiActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getreviewdata());
  }, [dispatch]);

  const { loader, error, data } = useSelector((state) => ({
    loader: state.redux.loader,
    error: state.redux.error,
    data: state.redux.data,
  }));
  console.log(data);

  const HandleDelete = (id) => {
    console.log("Delete-Id", id);

    if (window.confirm("Do Want To Delete?")) {
      dispatch(deletereviewdata(id));

      toast.success("Review Delete SuccessFully", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-header d-flex justify-content-center">
          <Link to={"/AddReview"} className="btn btn-success">
            Add Review
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Sr No.</td>
                <td>Title</td>
                <td>Description</td>
                <td>Rating</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{i.title}</td>
                    <td>{i.description}</td>
                    <td>{i.rating}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => HandleDelete(i.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ViewForm;
