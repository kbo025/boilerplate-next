import React from "react";

interface ExampleProps {
  title: string;
  description: string;
  onClick: () => void;
}

const ExampleComponent: React.FC<ExampleProps> = ({ title, description, onClick }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onClick} style={{ padding: "8px 16px", cursor: "pointer" }}>
        Click Me
      </button>
    </div>
  );
};

export default ExampleComponent;