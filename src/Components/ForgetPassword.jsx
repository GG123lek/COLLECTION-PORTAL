import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageunifiedpicture from "../assets/Images/imageunifiedpicture.png";
import "./ForgetPassword.css";
import LoaderComponent from "../Components/LoaderComponent"; // Import the LoaderComponent
import design from "../assets/Images/Design.png"
import Footer from "./Footer";
import FooterTwo from "./FooterTwo";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const animatedGifUrl = "https://media.giphy.com/media/3o6Ztpx8ASuS9Zd5WM/giphy.gif";

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

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
                style={{ outline: 'none' ,}}
              />
                      <div style={{ padding: '' }}>
      <label htmlFor="date-picker" style={{ display: 'flex', flexDirection: 'column' }}>
        Select a Date:
      </label>
      <input
        id="date-picker"
        type="text"
        value={selectedDate ? selectedDate.toLocaleDateString('en-GB') : ''}
        placeholder="Click to select a date"
        className="custom-date-picker"
        readOnly
        onClick={() => setIsCalendarOpen((prev) => !prev)} // Toggle calendar visibility
      />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          setIsCalendarOpen(false); // Close calendar after selecting a date
        }}
        dateFormat="dd/MM/yyyy"
        popperPlacement="bottom"
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          },
        ]}
        open={isCalendarOpen} // Control calendar visibility
        onClickOutside={() => setIsCalendarOpen(false)} // Close on outside click
        className="custom-date-picker"
        wrapperClassName="custom-date-picker-wrapper"
      />
      {selectedDate && (
        <p style={{ marginTop: '10px' }}>Selected Date: {selectedDate.toLocaleDateString('en-GB')}</p>
      )}
                      </div>
              <br/>
              {error && <p className="error">{error}</p>}
              <button type="submit" style={{width:'105%'}} disabled={loading}>
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <FooterTwo/>
      </div>

    
      {loading && <LoaderComponent />}
      <div style={{ width: '80%',zIndex:"-1",display:"flex", justifyContent:"center", position: 'fixed', right:"0" ,background:'blue'}}>
        {/* <img
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
        /> */}
        <img src={design} alt='' style={{
         width:"55%",position:'relative',left:'250px',bottom:'50px'
        }} />
    </div> 
    </div>
  );
}

export default ForgetPassword;
