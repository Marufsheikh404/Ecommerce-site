import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    const handleClick = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
    return (
        <div className='container mx-auto px-4'>
            <div>
                <form onSubmit={handleClick} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-xl text-center text-[#5CAF90] font-semibold">SignIn</legend>

                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />

                    <button className="btn bg-[#5CAF90] text-white mt-4">Login</button>
                </form>
                <div>
                    <h1 className='cts translate-x-2'> Do Not Have Any Account? Please <Link to={'/register'}><span className='text-[#5CAF90] font-semibold'>Register</span></Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;