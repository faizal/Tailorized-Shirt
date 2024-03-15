import React, { useState, useEffect, useRef } from 'react';
import { fabric } from 'fabric';

function ApplyMaterial({ Front,Back, onCanvasChange, color, x, y, apply }) {
  const [canvas, setCanvas] = useState(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  let [FrontHolder ,setFrontHolder] = useState()
  let [BackHolder ,setBackHolder] = useState()
  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: `#${color}`,
      width: x,
      height: y,
    });

    setCanvas(newCanvas);
  }, [x, y, color]);

  useEffect(() => {
    if (canvas && Front) {
      canvas.remove(FrontHolder)
      fabric.Image.fromURL(Front, (img) => {
        img.set({
          left: 0,
          top: 60,
        });
        setFrontHolder(img)
        canvas.add(img);
        captureCanvasData();
      });
    }
  }, [canvas, Front]);

  useEffect(() => {
    if (canvas && Back) {
      canvas.remove(BackHolder)
      fabric.Image.fromURL(Back, (img) => {
        img.set({
          left: x/2,
          top: 60,
        });
        setBackHolder(img)
        canvas.add(img);
        captureCanvasData();

      });
    }
  }, [canvas, Back]);
  const captureCanvasData = () => {
    if (canvas) {
      const canvasData = canvas.toDataURL('image/png');
      onCanvasChange(canvasData);
    }
  };

  return;
}

export default ApplyMaterial;
