import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigation = useNavigate()
    const [email, setemail] = useState();
    const [pass, setpass] = useState();

    const check = () => {
        if(email.length >2 && pass.length >2)
        {
            localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR');
            navigation('/Product');
        }
        else{
            alert("enter valid data")
        }
    };

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" onClick={check} className="btn btn-primary">Submit</button>
            </div>
        </>
    )
}
