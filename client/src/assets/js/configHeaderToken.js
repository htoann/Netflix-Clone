export const configHeaderToken = {
  headers: {
    token: "Bearer " + JSON.parse(localStorage.getItem("user"))?.accessToken,
  },
};
