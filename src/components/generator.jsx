import { useEffect, useState } from "react";
import "./generator.css";

function Generator(props) {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000");

  const randomUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let sign = "#";

    for (let i = 0; i < 6; i++) {
      sign += hex[randomUtility(hex.length)];
    }
    setColor(sign);
  };

  const handleRandomRgbColor = () => {
    const r = 255;
    const g = 255;
    const b = 255;

    setColor(
      `rgb(${randomUtility(r)},${randomUtility(g)},${randomUtility(b)})`
    );
  };

  useEffect(() => {
    if (typeOfColor === "hex") handleRandomHexColor();
    else handleRandomRgbColor();
  }, [typeOfColor]);

  return (
    <div
      className="container"
      style={{
        background: color,
      }}
    >
      <div className="buttons">
        <button onClick={() => setTypeOfColor("hex")}>Create Hex color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create Rgb color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? () => handleRandomHexColor()
              : () => handleRandomRgbColor()
          }
        >
          Random color
        </button>
      </div>
      <div className="text">
        <p>{typeOfColor === "hex" ? "Hex Color" : "Rgb color"}</p>
        <p>{color}</p>
      </div>
    </div>
  );
}

export default Generator;
