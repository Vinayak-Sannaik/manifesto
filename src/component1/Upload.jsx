import React from "react";
import img from "../assets/upload.png";

const Upload = () => {
  return (
    <div className="flex">
      <div className="upload">
        <img src={img} alt="img" />
      </div>
      <p className="add-recording">Upload Recording</p>
    </div>
  );
};

export default Upload;
