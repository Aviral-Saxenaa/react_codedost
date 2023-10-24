import React from "react";
import "./App.css";
import Video from "./components/Video";

function App() {
  const videos = [
    {
      id: 1,
      title: "A",
      age: "13",
      verified: true,
    },
    {
      id: 2,
      title: "B",
      age: "13",
      verified: false,
    },
    {
      id: 3,
      title: "C",
      age: "13",
      verified: true,
    },
    {
      id: 4,
      title: "D",
      age: "13",
      verified: false,
    },
  ];

  return (
    <div className="main">
      <h1>Videos</h1>
      <div className="divthis" style={{ display: "flex", flexDirection: "row"}}>
        {videos.map((video) => (
          <Video
            key={video.id} // Make sure to add a unique key for each item in the list
            title={video.title}
            age={video.age}
            verified={video.verified}
            
          />
        ))}
      </div>
    </div>
  );
}

export default App;
