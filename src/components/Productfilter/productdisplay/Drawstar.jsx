// import React, { useEffect, useRef } from "react";
// function DrawStar({ totalStars = 5, rating }) {
//   const canvasRef = useRef(null);
//   const drawstar = (
//     ctx,
//     { x, y, spikes = 5, outerRadius = 28, innerRadius = 14, fill }
//   ) => {
//     let rot = (Math.PI / 2) * 3;
//     let step = Math.PI / spikes;
//     ctx.beginPath();
//     ctx.moveTo(x, y - outerRadius);
//     for (let i = 0; i < spikes; i++) {
//       ctx.lineTo(
//         x + Math.cos(rot) * outerRadius,
//         y + Math.sin(rot) * outerRadius
//       );
//       rot += step;
//       ctx.lineTo(
//         x + Math.cos(rot) * innerRadius,
//         y + Math.sin(rot) * innerRadius
//       );
//       rot += step;
//     }
//     ctx.closePath();
//     ctx.fillStyle = fill;
//     ctx.fill();
//   };
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (let i = 0; i < totalStars; i++) {
//       const x = 25 + i * 55;
//       const y = 60;
//       if (i < Math.floor(rating)) {
//         drawstar(ctx, { x, y, fill: "#008C00" });
//       } else if (i < rating) {
//         drawstar(ctx, { x, y, fill: "lightgray" });
//         ctx.save();
//         ctx.beginPath();
//         ctx.rect(x - 24, y - 24, 24, 48);
//         ctx.clip();
//         drawstar(ctx, { x, y, fill: "#008C00" });
//         ctx.restore();
//       } else {
//         drawstar(ctx, { x, y, fill: "lightgray" });
//       }
//     }
//   }, [rating, totalStars]);
//   return (
//     <div className="starouter">
//       <canvas
//         ref={canvasRef}
//         width={totalStars * 54}
//         height={120}
//         style={{ width: "80px", height: "25px" }}
//       />
//     </div>
//   );
// }
// export default DrawStar;
import React, { useRef, useEffect } from "react";

const DrawStar = ({totalStars = 5, rating}) => {
  const canvasRef = useRef(null);

  const drawStar = (
    ctx,
    cx,
    cy,
    spikes,
    outerRadius,
    innerRadius,
    fillStyle
  ) => {
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

    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < totalStars; i++) {
      const x = 30 + i * 60;
      const y = 110;

      if (i < Math.floor(rating)) {
        drawStar(ctx, x, y, 5, 50, 22, "#008c00");
      } else if (i < rating) {
        drawStar(ctx, x, y, 5, 50, 22, "rgba(220, 220, 220, 1)");
        ctx.save();
        ctx.beginPath();
        ctx.rect(x - 24, y - 24, 24, 48);
        ctx.clip();
        drawStar(ctx, x, y, 5, 50, 22, "#008c00");
        ctx.restore();
      } else {
        drawStar(ctx, x, y, 5, 28, 14, "rgba(220, 220, 220, 1)");
      }
    }
  }, [rating, totalStars]);

  return (
    <div className="stararea">
      <div className="starouter">
        <canvas
          style={{ width: "77px", height: "20px" }}
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  );
};

export default DrawStar;