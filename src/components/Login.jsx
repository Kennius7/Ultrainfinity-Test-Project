import { useState } from 'react';
import "../css/Login.css";
import bgPics from "../assets/ultrainfinity-pic1.jpg";



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic
        console.log('Login clicked');
    };

    return (
        <div className="login-page">

            <div className="image-container">
                <img src={bgPics} alt="bg pics" className="bg-pics" />
            </div>

            <div className="login-box">
                <div className="login-form-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn-login">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
