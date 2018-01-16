export const GET_RESOURCE_REQUEST = "GET_RESOURCE_REQUEST";
export const GET_RESOURCE_SUCCESS = "GET_RESOURCE_SUCCESS";
export const GET_RESOURCE_FAILURE = "GET_RESOURCE_FAILURE";
export const DELETE_RESOURCE_SUCCESS = "DELETE_RESOURCE_SUCCESS";
export const DELETE_RESOURCE_FAILURE = "DELETE_RESOURCE_FAILURE";

export function getResourceRequest() {
  return {
    type: GET_RESOURCE_REQUEST
  };
}

export function getResourceSuccess(data) {
  return {
    type: GET_RESOURCE_SUCCESS,
    data: data
  };
}

export function getResourceFailure(error) {
  return {
    type: GET_RESOURCE_FAILURE,
    error: error
  };
}

export function deleteResourceSuccess(data) {
  return {
    type: DELETE_RESOURCE_SUCCESS,
    action: data
  };
}

export function deleteResourceFailure(error) {
  return {
    type: DELETE_RESOURCE_FAILURE,
    error: error
  };
}

// ----------------------------------------
// Getting Boards
// ----------------------------------------

export function getBoards() {
  return dispatch => {
    dispatch(getResourceRequest());

    fetch("/api/boards")
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(json => {
        dispatch(getResourceSuccess(json));
      })
      .catch(error => {
        dispatch(getResourceFailure(error));
      });
  };
}

// ----------------------------------------
// Create a New Board
// ----------------------------------------

export function createBoard(form) {
  return dispatch => {
    console.log("form => ", form);

    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(form)
    };

    fetch("/api/boards", options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(json => {
        dispatch(getResourceSuccess(json));
      })
      .catch(error => {
        dispatch(getResourceFailure(error));
      });
  };
}

// ----------------------------------------
// Delete a Board
// ----------------------------------------

export function deleteBoard(id) {
  console.log("board id from actions.js => ", id);
  return dispatch => {
    // change api route so its restful
    fetch(`/api/boards/${id}/delete`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      })
      .then(json => {
        dispatch(deleteResourceSuccess(json));
      })
      .catch(error => {
        dispatch(deleteResourceFailure(error));
      });
  };
}
