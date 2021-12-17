import "./App.css";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";

function App() {
  const [getResponse, setGetResponse] = useState<AxiosResponse<any>>()
  const [postResponse, setPostResponse] = useState<AxiosResponse<any>>()
  const [optionsResponse, setOptionsResponse] = useState<AxiosResponse<any>>()

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="App-btn"
          onClick={() =>
            axios
              .get("http://localhost:1236/test-get")
              .then((resp) => console.log(resp))
              .catch((err) => {
                console.log({err})
                setGetResponse(err.message)
              })
          }
        >
          test-get
        </button>
        {getResponse}
        <button
          className="App-btn"
          onClick={() =>
            axios
              .post("http://localhost:1236/test-post")
              .then((resp) => console.log(resp))
              .catch((err) => {
                console.log({err})
                setPostResponse(err.message)
              })
          }
        >
          test-post</button>
          {postResponse}
          <button
          className="App-btn"
          onClick={() =>
            axios
              .options("http://localhost:1236/test-options")
              .then((resp) => console.log(resp))
              .catch((err) => {
                console.log({err})
                setOptionsResponse(err.message)
              })
          }
        >test-options</button>
        {optionsResponse}
      </header>
    </div>
  );
}

export default App;
