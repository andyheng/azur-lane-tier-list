// hits reducer when called from fetch fn
export const shipsFetchDataSuccess = (ships) => (
  {
    type: "SHIPS_FETCH_DATA_SUCCESS",
    ships
  }
)

export const shipsFetchData = url => (
  dispatch => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error(res.responseText);
        }
        return res.json();
      })
      .then(fetchedData => {
        return dispatch(shipsFetchDataSuccess(fetchedData));
      })
  }
)