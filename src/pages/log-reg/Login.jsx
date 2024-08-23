import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {


    const { login, user, setUser } = useContext(AuthContext);

    // const [passwordError, setPasswordError] = useState(null)
    // const [credentialError, setCredentialError] = useState(null)

    const navigate = useNavigate();

    // const [user, refetch] = useUserInfo()
    // console.log('user info from login =', user);

    const handelLogin = async e => {
        e.preventDefault();

        // setCredentialError(null);
        // setPasswordError(null);

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        const res = await login(email, password)
        console.log('response from login page', res);



        if (res.token) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('credential', email);
            localStorage.setItem('user', JSON.stringify(res.user));
            setUser({ ...res.user });
            
            navigate('/');
        }
        else if (res.user && !res.password) {
            toast.error('Invalid Password!')
        }
        else {
            toast.error(`Invalid credential : ${email}`)
        }

    }


    return (
        <div className="min-h-[70vh] flex justify-center items-center ">
            <div className="space-y-4 lg:w-1/2">
                <h1 className="text-4xl font-bold">Login To Your Account</h1>
                <p>Have no account with us ? please <Link to={'/register'} className="text-left font-bold text-orange-400 text-lg"><span>Register</span></Link> now.</p>

                <div>
                    <form onSubmit={handelLogin}>
                        <div className="grid grid-cols-5 gap-6 items-center">
                            <label className="text-slate-400 font-semibold">Email</label>
                            <input type="email" name="email" className="col-span-4 p-2 border border-slate-300 hover:border-2 hover:border-black" placeholder="Your Email" />

                            <label className="text-slate-400 font-semibold">Password</label>
                            <input type="password" name="password" className="col-span-4 p-2 border border-slate-300 hover:border-2 hover:border-black" placeholder="Enter Password" />
                            <div></div>
                            <button type="submit" className="border-2 border-orange-400 p-2 text-orange-600 font-bold col-span-4">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;