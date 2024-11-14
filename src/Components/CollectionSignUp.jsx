import "./CollectionSignUp.css";
import { useState, useEffect } from "react";
import imageunifiedpicture from "../assets/Images/imageunifiedpicture.png";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";

// Import the external GIF URL
const animatedGifUrl = "https://media.giphy.com/media/3o6Ztpx8ASuS9Zd5WM/giphy.gif"; // Example external GIF URL

function CollectionSignUp({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [agents, setAgents] = useState([]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    if (!email || !password) {
      setError('All fields are required!');
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch('http://tm30usermanagement.tm30.net/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || 'Login failed';
        setError(errorMessage);
      } else {
        const data = await response.json();
        console.log('Login successful:', data);
        localStorage.setItem('authToken', data.token);
        navigate('/dashboard');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchAgents = async () => {
    try {
      const response = await fetch('http://tm30usermanagement.tm30.net/user/agents/all/?page=1', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error fetching agents:', errorData);
      } else {
        const data = await response.json();
        console.log('Agents fetched:', data);
        setAgents(data); 
      }
    } catch (err) {
      console.error('An error occurred while fetching agents:', err);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Left half of the screen with form */}
      <div style={{ width: '50%', background: 'white' }}>
        <img src={imageunifiedpicture} alt='' />
        <div className="signup-container">
          <p style={{ color: 'blue', fontSize: '20px', position: 'relative', left: '50px' }}>
            Sign Up Into Unified Payment
          </p>
          <br />
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid grey',
                width: '150%',
                borderRadius: '5px',
                backgroundColor: 'white',
                padding: '5px',
              }}>
                <input
                  name="text"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }}
                />
              </div>
              <br />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid grey',
                width: '150%',
                borderRadius: '5px',
                backgroundColor: 'white',
                flexDirection: 'row-reverse',
                padding: '5px',
              }}>
                {showPassword ? <FaEyeSlash onClick={togglePasswordVisibility} style={{ color: 'red' }} /> : <FaEye onClick={togglePasswordVisibility} style={{ color: 'red' }} />}
                <input
                  name="text"
                  placeholder="Enter your password"
                  onChange={(e) => { setPassword(e.target.value) }}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }}
                />
              </div>
              <br />
              {error && <p className="error">{error}</p>}
              <button style={{ width: '150%' }} type="submit" disabled={loading}>
                {loading ? 'Logging In...' : 'Log In'}
              </button>
            </form>
            <p>
              <a href="/forget-password" style={{ textDecoration: 'none', color: '#FF993A', position: 'relative', left: "55px" }}>Forget Password?</a>
            </p>
          </div>
        </div>
      </div>

     
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
          {children}
        </div>
      </div>
    </div>
  );
}

export default CollectionSignUp;
