import signpics from "../assets/Images/Design.bcc353c50613eef92e57.gif";
import "./CollectionSignUp.css";
import { useState } from "react";
import imageunifiedpicture from "../assets/Images/imageunifiedpicture.png";
import { useNavigate } from "react-router-dom";

function CollectionSignUp({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Simple validation
    if (!email || !password) {
      setError('All fields are required!');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://tm30usermanagement.tm30.net/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      } else {
        const data = await response.json();
        console.log('Login successful:', data);
        navigate('/dashboard');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
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
            <br/>
          <div className="form-container">
            <p style={{ color: 'blue', fontSize: '20px', fontWeight: 'bold' }}>Log In to Unified Payment</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br/>
              {error && <p className="error">{error}</p>}
              <button type="submit" disabled={loading} >
                {loading ? 'Logging In...' : 'Log In'}
              </button>
            </form>
            <br/>
            <p>
              <a href="/forget-password" style={{textDecoration:'none',color:'#FF993A'}}>Forget Password?</a>
            </p>
          </div>
        </div>
      </div>
      <div style={{ width: '50%', background: 'blue' }}>
        {children}
      </div>
    </div>
  );
}

export default CollectionSignUp;
