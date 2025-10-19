function LoginStatus() {
    const isLoggedIn = true; 
  
    return (
      <p>
        {isLoggedIn ? "You are logged in." : "Access denied. Please log in."}
      </p>
    );
  }
  
  export default LoginStatus;