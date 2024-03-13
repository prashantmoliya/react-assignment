import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addreviewdata } from "../Redux/ApiActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setform] = useState({
    title: "",
    rating: "",
    description: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.rating) {
      toast.error("Title & Rating are Required", {
        position: "top-center",
        autoClose: 3000,
      });
      return false;
    }

    console.log(form);

    dispatch(addreviewdata(form));

    navigate("/");
  };

  const HandleReset = () => {
    setform({
      title: "",
      rating: "",
      description: "",
    });
  };

  return (
    <div>
      <div className="form">
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add Review</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-12 mb-2">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Title"
                    value={form.title}
                    onChange={(e) =>
                      setform({ ...form, title: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-2">
                <div className="form-group">
                  <label>Rating</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Your Rating"
                    value={form.rating}
                    onChange={(e) =>
                      setform({ ...form, rating: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-2">
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Description"
                    value={form.description}
                    onChange={(e) =>
                      setform({ ...form, description: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={HandleSubmit}
            >
              Submit
            </button>
            &nbsp; | &nbsp;
            <Link className="btn btn-danger" onClick={HandleReset}>
              Reset
            </Link>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
