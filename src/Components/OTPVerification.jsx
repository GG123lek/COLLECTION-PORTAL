import { useState } from "react";

function OTPVerification() {
    const [otp, setOtp] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Verify OTP logic
      console.log('OTP submitted:', otp);
    };
  return (
    <div>
       <div>
      <h2>Verify OTP</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter OTP" 
          value={otp} 
          onChange={(e) => setOtp(e.target.value)} 
        />
        <button type="submit">Verify</button>
      </form>
    </div>
    </div>
  )
}

export default OTPVerification
