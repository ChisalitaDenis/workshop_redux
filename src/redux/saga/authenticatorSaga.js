import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

const fetchData = async (userName, password) => {
  const data = await axios.post(
    "https://rent-challenge-api.herokuapp.com/login",{},
    {headers:{ username: userName, password: password }}
  );
  return data;
};

function* login(action) {
  try {
    yield put({
      type: "SET_LOADING",
      payload: true,
    });
    const data = yield fetchData(action.payload.username, action.payload.password);
    console.log("aici vedem data!!!!!!", data.data);
    if(data.data.error){
        yield put({
            type: "ERROR",
            payload: data.data.error,
          });
    }
    yield put({
      type: "LOGIN_WITH_EMAIL_AND_PASSWORD",
      payload: { userProfile:data.data.userProfile, userToken:data.data.token },
    });
    if(!data.data.error){
        yield put({
            type: "ERROR",
            payload: "",
          });
    }
    console.log(action);
    yield put({
        type: "SET_LOADING",
        payload: false,
      });
  } catch (error) {
    console.log(error);
    yield put({
      type: "ERROR",
      payload: error,
    });
  }
}

export function* watchLogin() {
  yield takeLatest("LOGIN_WITH_EMAIL_AND_PASSWORD_SAGA", login);
}
