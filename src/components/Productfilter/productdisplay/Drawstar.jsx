import React, { useRef, useEffect } from "react";

const DrawStar = ({ totalStars = 5, rating }) => {
  const canvasRef = useRef(null);

  const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius, fillStyle) => {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }

    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // target width = 77px
    canvas.width = 80;
    canvas.height = 22;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const spacing = canvas.width / totalStars; // ~15.4px per star
    const outerRadius = 8; // smaller radius so all fit
    const innerRadius = 4;
    const y = canvas.height / 2;

    for (let i = 0; i < totalStars; i++) {
      const x = spacing / 2 + i * spacing;

      if (i < Math.floor(rating)) {
        drawStar(ctx, x, y, 5, outerRadius, innerRadius, "#077807ff");
      } else if (i < rating) {
        drawStar(ctx, x, y, 5, outerRadius, innerRadius, "lightgray");
        ctx.save();
        ctx.beginPath();
        ctx.rect(x - outerRadius, y - outerRadius, outerRadius, outerRadius * 2);
        ctx.clip();
        drawStar(ctx, x, y, 5, outerRadius, innerRadius, "#008c00");
        ctx.restore();
      } else {
        drawStar(ctx, x, y, 5, outerRadius, innerRadius, "lightgray");
      }
    }
  }, [rating, totalStars]);

  return (
    <div className="stararea">
      <canvas
        style={{ width: "80px", height: "22px" }}
        ref={canvasRef}
      />
    </div>
  );
};

export default DrawStar;
