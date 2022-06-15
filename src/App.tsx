import { dbRef } from "./firebase";
import { get } from "firebase/database";

function App() {
  get(dbRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return <div className="App"></div>;
}

export default App;
