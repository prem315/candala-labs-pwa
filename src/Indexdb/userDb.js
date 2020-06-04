import DB from "./database";

const onRequestError = (e) => {
  console.log("Database Error [USERS]", e);
};

export const addUser = (data) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(["users"], "readwrite");
    const store = transaction.objectStore("users");
    store.add(data);
  };
};

export const getUsers = (callback) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(["users"], "readonly");
    const store = transaction.objectStore("users");
    store.getAll().onsuccess = (ev) => {
      callback(ev.target.result);
    };
  };
};
