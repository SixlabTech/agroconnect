import React from "react";

const FlowerExplosion = ({ position }) => {
  const flowers = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 200 - 100}px`,
    y: `${Math.random() * 200 - 100}px`,
    delay: `${Math.random() * 0.5}s`
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50" style={{ top: position.top, left: position.left }}>
      {flowers.map(flower => (
        <svg
          key={flower.id}
          className="flower"
          style={{ '--x': flower.x, '--y': flower.y, '--delay': flower.delay }}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30">
          <path d="M32 2C32.8 2 33.6 2.6 34 3.4C35 4.6 36 5.6 37 6.6C39 8.6 41 10.6 43 12.6C45 14.6 47 16.6 49 18.6C51 20.6 53 22.6 55 24.6C57 26.6 59 28.6 61 30.6C61.6 31 62.4 31.2 63 31.8C64 32.6 64 34.6 63 35.4C62.4 36 61.6 36.2 61 36.6C59 38.6 57 40.6 55 42.6C53 44.6 51 46.6 49 48.6C47 50.6 45 52.6 43 54.6C41 56.6 39 58.6 37 60.6C36 61.6 35 62.6 34 63.6C33.6 64.4 32.8 65 32 65C31.2 65 30.4 64.4 30 63.6C29 62.6 28 61.6 27 60.6C25 58.6 23 56.6 21 54.6C19 52.6 17 50.6 15 48.6C13 46.6 11 44.6 9 42.6C7 40.6 5 38.6 3 36.6C2.4 36.2 1.6 36 1 35.4C0 34.6 0 32.6 1 31.8C1.6 31.2 2.4 31 3 30.6C5 28.6 7 26.6 9 24.6C11 22.6 13 20.6 15 18.6C17 16.6 19 14.6 21 12.6C23 10.6 25 8.6 27 6.6C28 5.6 29 4.6 30 3.4C30.4 2.6 31.2 2 32 2Z"
            fill="#3F6341"
          />
        </svg>
      ))}
    </div>
  );
};

export default FlowerExplosion;
