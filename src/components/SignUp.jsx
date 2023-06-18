import { useState, useEffect} from 'react';
import "../css/SignUp.css";
import bgPics from "../assets/ultrainfinity-pic1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
    setIsFormValid(email !== "" && password !== "");
    }, [email, password]);
    


    const handleSignUp = (e) => {
        e.preventDefault();
        // Perform login logic
        console.log('Sign Up clicked');
    };

    return (
        <div className="signup-page">

            <div className="image-container">
                <img src={bgPics} alt="bg pics" className="bg-pics" />
            </div>

            <div className="signup-box">
                <div className="signup-form-container">
                    <h2 className="signup-box-container">Sign Up</h2>
                    <h4 className="subtitle-box">Register with the right details to start using the platform</h4>
                    <form onSubmit={handleSignUp} className="form-box">
                        <div className="form-group">
                            <label>Full Name:</label>
                            <input
                                required
                                placeholder="Enter your Full Name"
                                type="name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
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
                        <div className="radio-label-container">
                            <label className="radio-label">
                                <input
                                type="radio"
                                disabled/>
                                Use Numbers
                            </label>
                            <label className="radio-label">
                                <input
                                type="radio"
                                disabled/>
                                Use Capital Letters
                            </label>
                            <label className="radio-label">
                                <input
                                type="radio"
                                disabled/>
                                Use Small Letters
                            </label>
                            <label className="radio-label">
                                <input
                                type="radio"
                                disabled/>
                                Use Special Characters Eg. @#$%^!
                            </label>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password:</label>
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
                            className={`btn-signup ${isFormValid ? 'btn-signup-active' : ''}`}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
