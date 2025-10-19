const Card = ({ children }) => (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        width: "300px",
        margin: "20px auto",
        backgroundColor: "white",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
  
  export default Card;