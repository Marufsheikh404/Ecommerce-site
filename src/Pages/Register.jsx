import React from 'react';
import { Link } from 'react-router';
import useAuth from '../Hook/useAuth';
import Swal from 'sweetalert2';

const Register = () => {
    const { signUp } = useAuth();
    const handleClick = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You SignUp successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error)
            });
    };
    return (
        <div className='container mx-auto px-4'>
            <div>
                <form onSubmit={handleClick} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-xl text-center text-[#5CAF90] font-semibold">Register</legend>

                    <label className="label">First Name</label>
                    <input name='first' type="email" className="input" placeholder="Enter Your First Name" />

                    <label className="label">Last Name</label>
                    <input name='last' type="email" className="input" placeholder="Enter You Last Name" />

                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />

                    <button className="btn bg-[#5CAF90] mt-4">SignUp</button>
                </form>
                <div>
                    <h1 className='cts translate-x-2'>You Already Have An Account?Please <Link to={'/login'}><span className='text-[#5CAF90] font-semibold'>Login</span></Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Register;