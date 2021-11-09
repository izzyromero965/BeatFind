import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./UploadImage.css";

const UploadImage = () => {
  return (
    <div>
      <h2>Welcome to the upload page</h2>
    </div>
  );
};

export default UploadImage;
