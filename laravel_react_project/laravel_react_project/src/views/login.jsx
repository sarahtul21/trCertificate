import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";

export default function login(){

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const {setUser, setToken} = useStateContext();

    const Submit =  (ev) =>{
        ev.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axiosClient.post("/login",payload).then(({data})=>{
            setUser(data.user);
            setToken(data.token);
            navigate('/certificates');
    }).catch(err => {
        const response = err.response;
        if(response && response.status === 422){
            console.log(response.data.errors);
        }
    });
    }

    return(
        <div className="login-signup-form animated fadeinDown rounded">
            <div className="form">
                <h1 className="title">
                    Login To Your Account
                </h1>
                <form onSubmit={Submit}>
                    <input ref={emailRef} type="email" placeholder="Email" className='input input-accent w-full bg-[#f7f7f7] mb-3' />
                    <input ref={passwordRef} type="password" placeholder="Password" className='input input-accent w-full bg-[#f7f7f7] mb-3' />
                    <button className="btn btn-block btn-accent">Login</button>
                    <p className="message">
                    Not Registered? <Link to= '/register'>Create a new account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
