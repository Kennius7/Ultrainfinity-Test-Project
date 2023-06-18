import { useState, useEffect} from 'react';
import "../css/Login.css";
import bgPics from "../assets/ultrainfinity-pic1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [loggedIn, setLoggedIn] = useState(false);

    const Navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
    setIsFormValid(email !== "" && password !== "");
    }, [email, password]);
    


    // const useHandleLogin = async (e) => {
    //     e.preventDefault();
    //     console.log(e.target);
    //     // Perform login logic
    //     try {
    //         // Make a POST request to the login API endpoint
    //         const response = await axios.get(
    //             "http://ec2-35-89-77-243.us-west-2.compute.amazonaws.com:8400/api/documentation#/Authentication/user/login", 
    //             { email, password }
    //         );
    //         // Check the response from the API
    //         if (response.status === 200) {
    //         // Successful login
    //         setLoggedIn(true);
    //         console.log('Data fetch successful');
    //         } else {
    //         // Invalid credentials or other error
    //         setLoggedIn(false);
    //         console.log('Invalid credentials');
    //         }
    //         if (loggedIn) {
    //             console.log("Logged In");
    //         } else { console.log("Not Logged In"); return }

    //         NavigateTo("/");
    //         console.log('Login clicked');
    
    //         // Reset form fields
    //         setEmail('');
    //         setPassword('');
    //     } catch (error) {
    //         // Error occurred during the API request
    //         setLoggedIn(false);
    //         console.log('An error occurred', error);
    //     }


    // };

    const useHandleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(
                "http://ec2-35-89-77-243.us-west-2.compute.amazonaws.com:8400/api/documentation#/Authentication/user/login", 
                { email, password }
            );
            const { email: apiEmail, password: apiPassword } = response.data;

            if (response.status === 200 && email === apiEmail && password === apiPassword) {
                setLoggedIn(true);
                console.log('Login successful');
                Navigate("/signup");
            } else {
                setLoggedIn(false);
                console.log('Invalid credentials');
            }
            setEmail('');
            setPassword('');
        } catch (error) {
            setLoggedIn(false);
            console.log('An error occurred', error);
        }
    };

    return (
        <div className="login-page">

            <div className="image-container">
                <img src={bgPics} alt="bg pics" className="bg-pics" />
            </div>

            <div className="login-box">
                <div className="login-form-container">
                    <h2 className="login-box-container">Login</h2>
                    <h4 className="subtitle-box">Welcome back. Enter your details.</h4>
                    <form onSubmit={useHandleLogin} className="form-box">
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                required
                                placeholder="Enter your Email address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                required
                                placeholder="Enter password"
                                type={passwordVisible ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {
                                passwordVisible 
                                ? (<FontAwesomeIcon 
                                        icon={faEyeSlash} 
                                        onClick={togglePasswordVisibility} 
                                        className="fontAwesomeIcon" />) 
                                : (<FontAwesomeIcon 
                                        icon={faEye} 
                                        onClick={togglePasswordVisibility} 
                                        className="fontAwesomeIcon" />)
                            }
                        </div>
                        <button type="submit" 
                            className={`btn-login ${isFormValid ? 'btn-login-active' : ''}`}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
