
import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letters = [];

    for (let i = 0; i < 100; i++) {
      letters.push({
        x: Math.random() * width,
        y: Math.random() * height,
        char: alphabets[Math.floor(Math.random() * alphabets.length)],
        speed: Math.random() * 3 + 1,
        size: Math.random() * 30 + 15,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      letters.forEach((letter) => {
        ctx.font = `${letter.size}px Arial`;
        ctx.fillStyle = `rgba(255, 255, 255, ${letter.opacity})`;
        ctx.fillText(letter.char, letter.x, letter.y);

        letter.y += letter.speed;

        if (letter.y > height) {
          letter.y = 0;
          letter.x = Math.random() * width;
          letter.char = alphabets[Math.floor(Math.random() * alphabets.length)];
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="app-container">
      <canvas ref={canvasRef}></canvas>
      <h1 className="front-text">Welcome To ProjectIDX</h1>
      <div className="para">
      <p className="sub-text">ProjectIDX is a cloud-based, AI-powered integrated development environment (IDE) by Google. It streamlines app development with features like AI-assisted coding, real-time previews, and seamless GitHub integration. Ideal for full-stack, multiplatform projects, it offers pre-built templates and built-in emulators to enhance productivity and simplify workflows.<br/>ProjectIDX offers :
      </p>
      </div>
      <div className="image">
         <img src="data:image/png;base64,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" alt="react" className="react"/> 
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzfeBBLL2e6DfSTfDdew5jRg7Zd3wtfbmLQ&s" className="flutter" alt="flutter"/>      
         <img src="data:image/jpeg;base64,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" className="nextjs" alt="nextjs"/>
         <img src="data:image/png;base64,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" className="Angular" alt="Angular"/>
      </div>

    </div>
  );
}

export default App;
