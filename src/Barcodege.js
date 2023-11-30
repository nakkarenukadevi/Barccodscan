import React, { useState } from "react";
import Barcode from "react-barcode";

const Barcodege = () => {
  let [text, setText] = useState("");
  let [barCode, setbarCode] = useState("");

  const genreateBarcode = () => {
    setbarCode(text);
  };
  return (
    <div>
      <div>
        <h4>generate barCode</h4>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="py-2 px-3 border-2 border-gray-500 mr-3"
        />
        <button
          className="bg-blue-500 px-5 py-2 mt-3 text-white"
          onClick={genreateBarcode}
        >
          barcode generate
        </button>
        <Barcode value={barCode} />
      </div>
    </div>
  );
};

export default Barcodege;
