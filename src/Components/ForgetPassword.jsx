import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageunifiedpicture from "../assets/Images/imageunifiedpicture.png";
import "./ForgetPassword.css";
import LoaderComponent from "../Components/LoaderComponent";
import design from "../assets/Images/Design.png";
import FooterTwo from "./FooterTwo";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const animatedGifUrl = "https://media.giphy.com/media/3o6Ztpx8ASuS9Zd5WM/giphy.gif";

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(Array(6).fill(""));
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

  const handleOtpChange = (element, index) => {
    if (!/^[0-9]?$/.test(element.value)) {
      setError("Only numbers are allowed in OTP.");
      return;
    }
    setError("");
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleOtpKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || otp.some((digit) => digit === "") || !newPassword || !confirmPassword) {
      setError('All fields are required!');
      setLoading(false);
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      setLoading(false);
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match!');
      setLoading(false);
      return;
    }

    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6 || isNaN(enteredOtp)) {
      setError('OTP must be a 6-digit number.');
      setLoading(false);
      return;
    }

    // Simulating async task
    setTimeout(() => {
      console.log('Password reset:', { email, otp: enteredOtp, newPassword });
      setLoading(false);
      alert("Password reset successfully!");
      navigate('/');
    }, 2000);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <div style={{ padding: '20px' }}>
        <img src={imageunifiedpicture} alt='' />
        <p style={{ color: '#52C3F1' }}>Unified Payment</p>
      </div>

      <div style={{ width: '50%', background: 'white' }}>
        <div className="signup-container">
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
              <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    style={{
                      width: "40px",
                      height: "40px",
                      textAlign: "center",
                      fontSize: "18px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      outline: "none",
                    }}
                  />
                ))}
              </div>
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
              <br />
              <div>
                <label htmlFor="date-picker">Select a Date:</label>
                <input
                  id="date-picker"
                  type="text"
                  value={selectedDate ? selectedDate.toLocaleDateString('en-GB') : ''}
                  placeholder="Click to select a date"
                  className="custom-date-picker"
                  readOnly
                  onClick={() => setIsCalendarOpen((prev) => !prev)}
                />
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    setIsCalendarOpen(false);
                  }}
                  dateFormat="dd/MM/yyyy"
                  open={isCalendarOpen}
                  onClickOutside={() => setIsCalendarOpen(false)}
                  className="custom-date-picker"
                />
              </div>
              <br />
              {error && <p className="error">{error}</p>}
              <button type="submit" style={{ width: '105%' }} disabled={loading}>
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <FooterTwo />
      </div>

      {loading && <LoaderComponent />}
      <div
        style={{
          width: '80%',
          zIndex: "-1",
          display: "flex",
          justifyContent: "center",
          position: 'fixed',
          right: "0",
          background: '#52C3F1',
        }}
      >
        <img
          src={design}
          alt=''
          style={{
            width: "55%",
            position: 'relative',
            left: '250px',
            bottom: '50px',
          }}
        />
      </div>
    </div>
  );
}

export default ForgetPassword;
