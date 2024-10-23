import { useState } from "react";

function ForgetPassword() {
   
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle password reset logic
      console.log('Password reset link sent to:', email);
    };
  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div> 
    
  )
}

export default ForgetPassword
