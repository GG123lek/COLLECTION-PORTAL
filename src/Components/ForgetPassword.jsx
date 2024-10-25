// ForgotPassword.js
import { useState } from "react";
import imageunifiedpicture from "../assets/Images/imageunifiedpicture.png";
import "./CollectionSignUp.css"; // Reusing the same CSS

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    if (!email || !otp || !newPassword || !confirmPassword) {
      setError('All fields are required!');
      setLoading(false);
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match!');
      setLoading(false);
      return;
    }

    // Proceed with password reset logic here (e.g., API call)
    console.log('Password reset:', { email, otp, newPassword });
    
    // Reset loading state
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <div style={{ padding: '20px' }}>
        <img src={imageunifiedpicture} alt='' />
      </div>

      <div style={{ width: '50%', background: 'white' }}>
        <div className="signup-container">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          <div className="form-container">
            <p style={{ color: 'blue', fontSize: '20px', fontWeight: 'bold' }}>Reset Your Password</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <br/>
              {error && <p className="error">{error}</p>}
              <button type="submit" disabled={loading}>
                {loading ? 'Resetting...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div style={{ width: '50%', background: 'blue' }}>
        {/* Optional children or other content */}
      </div>
    </div>
  );
}

export default ForgetPassword;
