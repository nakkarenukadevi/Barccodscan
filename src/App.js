import React from "react";

import qrcode from "qrcode";
import "./App.css";
import Barcode from "./Barcodege";
import { useState, useRef } from "react";
import QrReader from "react-qr-reader";
import Barcodege from "./Barcodege";

function App() {
  const qrRef = useRef(null);
  console.log(qrRef);
  let [text, setText] = useState("");
  const [imageQR, setImageQR] = useState();
  const [fileResult, setFileResult] = useState("");
  const [webCamResult, setWebCamResult] = useState("");

  const generateQRCode = async () => {
    var image = await qrcode.toDataURL(text);
    setImageQR(image);
  };
  const openDialog = () => {
    qrRef.current.openImageDialog();
  };
  const fileError = (error) => {
    if (error) {
      console.log(error);
    }
  };
  const fileScan = (result) => {
    if (result) {
      setFileResult(result);
    }
  };
  const webCamError = (error) => {
    if (error) {
      console.log(error);
    }
  };
  const webCamScan = (result) => {
    if (result) {
      setWebCamResult(result);
    }
  };

  return (
    <div className="flex justify-evenly">
      <div className=" w-92 px-10 border-2 h-62 border-black  rounded-lg m-3">
        <h1>generate Qrcode</h1>
        <div className="m-2">
          <label>Name</label> :
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="py-2 px-4 border-gray-500 border-2 rounded-lg"
          />
        </div>
        <div className="px-2 py-1">
          <button
            onClick={generateQRCode}
            className="bg-blue-500 px-7 py-2 rounded-lg text-white bold"
          >
            Qrcode generate
          </button>
        </div>
        {imageQR && (
          <a href={imageQR} download>
            <img src={imageQR} />
          </a>
        )}
      </div>
      <div className=" w-92 px-10 border-2 h-62 border-black  rounded-lg m-3">
        <h1>scan code</h1>
        <button
          onClick={openDialog}
          className="bg-blue-500 px-7 py-2 mt-3 rounded-lg text-white bold"
        >
          reader
        </button>
        <h3>fileresult:{fileResult}</h3>
        <QrReader
          ref={qrRef}
          delay={300}
          onError={fileError}
          onScan={fileScan}
          legacyMode={true}
        />
      </div>
      <div className=" w-92 px-10 border-2 h-62 border-black  rounded-lg m-3">
        <h5>webcam</h5>
        <div className="mt-3">
          <QrReader delay={300} onError={webCamError} onScan={webCamScan} />
        </div>
        <h6>webCamresult: {webCamResult}</h6>
      </div>
      <Barcodege />
    </div>
  );
}

export default App;
