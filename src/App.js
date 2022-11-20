import "./App.css";
import { useEffect } from "react";
import { fabric } from "fabric";

function App() {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");
    canvas.setDimensions({width:window.innerWidth, height:900, top:50});
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 3;
    canvas.freeDrawingBrush.color = "#0052cc";
  }, []);

  return <canvas id="canvas" />;
}

export default App;
