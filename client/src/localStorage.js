export const loadState = () => {
  try {
    console.log("loadState");
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      console.log("This is bad");
      return undefined;
    }
    console.log("THIS IS IT", JSON.parse(serializedState));
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    console.log("saveState");
    const serializedState = JSON.stringify(state);
    console.log("serializedState", serializedState);
    localStorage.setItem("state", serializedState);

    localStorage.getItem("state");
  } catch (err) {
    console.log(err);
  }
};
