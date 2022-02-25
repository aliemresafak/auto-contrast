import { useEffect, useState } from "react";
import "./App.css";

const getContrastYIQ = (hexcolor: string) => {
  var r = parseInt(hexcolor.substring(1, 2), 16);
  var g = parseInt(hexcolor.substring(3, 2), 16);
  var b = parseInt(hexcolor.substring(5, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
};

const App = () => {
  const [background, setBackground] = useState("#ffffff");
  const [color, setColor] = useState("#000000");
  const colors: Array<string> = [
    "#F7F6CF",
    "#B6D8F2",
    "#F4CFDF",
    "#5784BA",
    "#9AC8EB",
    "#218B82",
    "#9AD9DB",
    "#E5DBD9",
    "#98D4BB",
    "#EB96AA",
  ];
  useEffect(() => {
    let interval = setInterval(() => {
      let index = Math.floor(Math.random() * colors.length);
      let contrastColor = getContrastYIQ(colors[index]);
      setColor(contrastColor);
      setBackground(colors[index]);
    }, 3 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content" style={{ background, color }}>
      <div className="sub-content">
        <h3>Auto Contrast</h3>
        <h5>{background}</h5>
      </div>
    </div>
  );
};
export default App;
