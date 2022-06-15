import { useEffect, useState } from "react";
import { dbRef } from "./firebase";
import { get } from "firebase/database";

const wordNormalizer = (word: string) =>
  word.toLowerCase().split("").sort().join("");

const anagramChecker = (element: string, text: string) => {
  return wordNormalizer(element) === wordNormalizer(text);
};

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState<string[] | null>(null);
  const [numOfAnagrams, setNumOfAnagrams] = useState(0);

  get(dbRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        if (!data) {
          setData(snapshot.val().test);
        }
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  useEffect(() => {
    if (text !== "" && data) {
      let num = 0;
      data.forEach((element) => {
        if (anagramChecker(element, text)) {
          num += 1;
          return num;
        }
      });
      setNumOfAnagrams(num);
    }
  }, [text, data]);

  return (
    <div className="App">
      <div>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          type="text"
        />
        <p>
          {numOfAnagrams} anagram{numOfAnagrams === 1 ? "" : "s"} found
        </p>
      </div>
      {data && (
        <div>
          <p>Data:</p>
          <code>
            {JSON.stringify(data.filter((element) => Boolean(element)))}
          </code>
        </div>
      )}
    </div>
  );
}

export default App;
