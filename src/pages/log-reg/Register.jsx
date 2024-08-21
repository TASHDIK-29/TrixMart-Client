import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-4xl font-bold">Register Your Account</h1>
            <p>If you have an account with us, please login at the <Link to={'/login'} className="text-purple-600 font-semibold text-xl">Login</Link> page</p>
            <div className="space-y-2">
                <h3 className="text-xl text-slate-500 font-semibold">Your Personal Details</h3>

                <div>
                    <form>
                        <div className="grid grid-cols-5 gap-6 items-center w-4/6">
                            <label className="text-slate-400 font-semibold">First Name</label>
                            <input type="text" className="col-span-4 p-2 border border-slate-300 hover:border-2 hover:border-black" placeholder="First Name" />

                            <label className="text-slate-400 font-semibold">Last Name</label>
                            <input type="text" className="col-span-4 p-2 border border-slate-300 hover:border-2 hover:border-black" placeholder="Last Name" />

                            <label className="text-slate-400 font-semibold">Email</label>
                            <input type="email" className="col-span-4 p-2 border border-slate-300 hover:border-2 hover:border-black" placeholder="Your Email" />

                            <label className="text-slate-400 font-semibold">Password</label>
                            <input type="password" className="col-span-4 p-2 border border-slate-300 hover:border-2 hover:border-black" placeholder="Enter Password" />

                            <button className="border p-2 text-slate-600 font-bold col-span-5">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;