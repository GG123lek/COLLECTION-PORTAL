import "./CollectionSignUp.css";
import { useState, useEffect } from "react";
import imageunifiedpicture from "../assets/Images/imageunifiedpicture.png";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LoaderComponent from "../Components/LoaderComponent";
import design from "../assets/Images/Design.png"
import Footer from "./Footer";

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

  async function fetchWithAlert(url, options = {}) {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Request failed');
      }

      const data = await response.json();
      alert('Request successful!');
      return data;
    } catch (error) {
      throw error;
    }
  }

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
      const data = await fetchWithAlert('http://tm30usermanagement.tm30.net/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      console.log('Login successful:', data);
      localStorage.setItem('authToken', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchAgents = async () => {
    try {
      const data = await fetchWithAlert('http://tm30usermanagement.tm30.net/user/agents/all/?page=1', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Agents fetched:', data);
      setAgents(data);
    } catch (err) {
      console.error('Error fetching agents:', err);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <div style={{ width: '50%', backgroundColor: 'white',borderRadius:'20px'}}>
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
                backgroundColor: 'white',
                padding: '5px',
              }}>
                <input
                  name="text"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    width: '100%',
                  }}
                />
              </div>
              <br />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid grey',
                width: '150%',
                backgroundColor: 'white',
                flexDirection: 'row-reverse',
                padding: '5px',
              }}>
                {showPassword ? (
                  <FaEyeSlash
                    onClick={togglePasswordVisibility}
                    style={{ color: 'red', cursor: 'pointer' }}
                  />
                ) : (
                  <FaEye
                    onClick={togglePasswordVisibility}
                    style={{ color: 'red', cursor: 'pointer' }}
                  />
                )}
                <input
                  name="text"
                  placeholder="Enter your password"
                  onChange={(e) => { setPassword(e.target.value) }}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    width: '100%',
                  }}
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
      <Footer/>
      </div>
     
      <div style={{ width: '80%',zIndex:"-1",display:"flex", justifyContent:"center", position: 'fixed', right:"0" ,background:'lightblue'}}>
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

      {loading && <LoaderComponent />}
    </div>
  );
}

export default CollectionSignUp;
