const dbVersion = 1;

export default () => {
  const request = indexedDB.open("users", dbVersion);

  request.onerror = (e) => {
    console.log("Database Error", e);
  };

  request.onsuccess = (e) => {
    console.log("Database Opened");
  };

  request.onupgradeneeded = (e) => {
    const db = e.target.result;
    let store = db.createObjectStore("users", {
      keyPath: "name",
      autoIncrement: true,
    });
  };

  return request;
};
