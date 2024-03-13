import axios from "axios";
import { adddata, deldata, deletedata, error, getdata, request } from "./Action";

export const getreviewdata = () => {
  return async (dispatch) => {
    dispatch(request());

    await axios.get("http://localhost:4000/review")
    .then((res) => {
      console.log("Api-Get++", res);

      if (res.status === 200) {
        dispatch(getdata(res.data));
      }
    })
    .catch((err)=>{
      console.log("Api-Get-Error++", err);

      if (err.status === 404) {
        dispatch(error(err.message));
      }
    });
  };
};

export const addreviewdata = (data) => {
  return async (dispatch) => {
    dispatch(request());

    await axios
      .post("http://localhost:4000/review", data)
      .then((res) => {
        console.log("Api-Post++", res);

        if (res.status === 201) {
          dispatch(adddata(res.data));
        }
      })
      .catch((err) => {
        console.log("Api-Post-Error++", err);

        if (err.status === 404) {
          dispatch(error(err.message));
        }
      });
  };
};


export const deletereviewdata = (DId) => {
  return async (dispatch) => {
    dispatch(request());

    await axios
      .delete(`http://localhost:4000/review/${DId}`)
      .then((res) => {
        console.log("Api-Delete++", res);

        if (res.status === 200) {
          dispatch(deletedata());

          dispatch(getreviewdata());
        }
      })
      .catch((err) => {
        console.log("Api-Delete-Error++", err);

        if (err.status === 404) {
          dispatch(error(err.message));
        }
      });
  };
};
