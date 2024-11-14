import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageunifiedpicture from "../assets/Images/imageunifiedpicture.png";
import "./ForgetPassword.css";
import LoaderComponent from "../Components/LoaderComponent"; // Import the LoaderComponent

const animatedGifUrl = "https://media.giphy.com/media/3o6Ztpx8ASuS9Zd5WM/giphy.gif";

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission and page reload
    setError('');
    setLoading(true); // Start loading animation

    // Validation checks
    if (!email || !otp || !newPassword || !confirmPassword) {
      setError('All fields are required!');
      setLoading(false); // Stop loader if there's an error
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setLoading(false); // Stop loader if there's an error
      return;
    }
    if (otp.length !== 6 || isNaN(otp)) {
      setError('OTP must be a 6-digit number.');
      setLoading(false); // Stop loader if there's an error
      return;
    }
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      setLoading(false); // Stop loader if there's an error
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match!');
      setLoading(false); // Stop loader if there's an error
      return;
    }

    // Simulating an async task (like an API call)
    setTimeout(() => {
      console.log('Password reset:', { email, otp, newPassword });

      // Stop loading animation after task completion
      setLoading(false);

      // Display success alert
      alert("Password reset successfully!");

      // Redirect user to another page (like home page or login)
      navigate('/');
    }, 2000); // Simulate an async delay, adjust as per your needs (API request time)
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <div style={{ padding: '20px' }}>
        <img src={imageunifiedpicture} alt='' />
      </div>

      <div style={{ width: '50%', background: 'white' }}>
        <div className="signup-container">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="form-container">
            <p style={{ color: 'blue', fontSize: '20px', fontWeight: 'bold' }}>Reset Your Password</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ outline: 'none' }}
              />
              <br />
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                style={{ outline: 'none' }}
              />
              <br />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={{ outline: 'none' }}
              />
              <br />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ outline: 'none' }}
              />
              <br/>
              <br/>
              {error && <p className="error">{error}</p>}
              <button type="submit" style={{width:'105%'}} disabled={loading}>
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          </div>
        </div>
      </div>

    
      {loading && <LoaderComponent />}
     
      <div style={{ width: '50%', position: 'relative' }}>
        <img
          src={animatedGifUrl} 
          alt="Animated Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', 
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0, 
          }}
        />
        <div style={{
          position: 'relative',
          zIndex: 1, 
          padding: '20px',
          textAlign: 'center',
          color: 'white',
        }}>
        
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
