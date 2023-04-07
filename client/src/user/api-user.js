const URL = "http://localhost:5000"
const create = async (user) => {
  try {
    let response = await fetch(URL + "/api/v1/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const list = async (signal) => {
    console.log("request is in client side")
  try {
    let response = await fetch(URL + "/api/v1/users", {
      method: "GET",
      signal: signal,
    });
    console.log("response is ", response);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const read = async (params, credential, signal) => {
  try {
    let response = await fetch(URL + "/api/v1/users" + params.userId, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credential.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const update = async (params, credential, user) => {
  try {
    let response = await fetch(URL + "/api/v1/users" + params.userId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credential.t,
      },
      body: JSON.stringify(user),
    });

    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const remove = async (params, credential) => {
  try {
    let response = await fetch(URL + "/api/v1/users" + params.userId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credential.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { create, list, read, update, remove };
