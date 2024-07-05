import React from "react";

const Addmusic = () => {
  return (
    <div className="container">
      <div className="choose-sound">
        <div className="recording">
          <form action="">
            <input
              type="checkbox"
              name="select-recording"
              id="select-recording"
            />{" "}
            Select Recording
          </form>
        </div>
        <div className="music">
          <form action="">
            <input type="checkbox" name="select-music" id="select-music" />{" "}
            Select Music
          </form>
        </div>
      </div>

      <div className="long-timer">
        <div className="decrease-time">
          <button className="left-btn">◀</button>
          </div>
        <div className="time">1 Hour</div>
        <div className="increase-time">
          <button className="right-btn">▶</button>
          </div>
      </div>

      <button className="start-listening">Start Manifesting</button>
    </div>
  );
};

export default Addmusic;
