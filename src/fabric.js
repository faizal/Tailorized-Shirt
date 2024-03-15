import React, { useState, useRef, useEffect } from 'react';
import { fabric } from 'fabric';
function CanvasImageUploader({ type,onCanvasChange, color ,x,y}) {
  const [canvas, setCanvas] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [background, setBackground] = useState('transparent');
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: `transparent`,
    });
    fabric.Object.prototype.set({
      borderColor: '#000', 
      cornerColor: '#000',
      transparentCorners: true,
      borderRadius: 10,
    });
  
    setCanvas(newCanvas);
  }, []);

  const setCanvasBackground = (newColor) => {
    setBackground(newColor);
  };

  const captureCanvasData = () => {
    if (canvas) {
      setCanvasBackground(`#${color}`); // Set the background to the desired color
      const canvasData = canvas.toDataURL('image/png',1.0);
      setCanvasBackground('transparent'); // Reset the background to transparent
      onCanvasChange(canvasData);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (selectedImage) {
        canvas.remove(selectedImage);
      }
      fabric.Image.fromURL(URL.createObjectURL(file), (img) => {
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imgWidth = img.width;
        const imgHeight = img.height;
        const scaleX = canvasWidth / imgWidth;
        const scaleY = canvasHeight / imgHeight;
        const scale = Math.min(scaleX, scaleY);
        img.set({
          left: 0,
          top: 22,
          scaleX: scale ,
          scaleY: scale,
        });
        
        setSelectedImage(img);
        canvas.add(img);
        captureCanvasData
      });
    }
  };

  return (
    <div style={{position:'relative',display:'flex',flexDirection:'column',padding:'10px'}}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button onClick={() => fileInputRef.current.click()} style={{background:'white',border:'1px black solid',padding:'5px'}}>Upload Image</button>
      <span style={{background:'white',padding:'5px',textAlign:'center'}}>{type}</span>
      <canvas ref={canvasRef} width={x} height={y}></canvas>
      <button onClick={captureCanvasData} style={{background:'white',border:'1px black solid',padding:'5px'}}>Apply</button>
    </div>
  );
}

export default CanvasImageUploader;
