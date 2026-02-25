import AuthLayout from "@/layouts/AuthLayout";
import { useState } from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { router, Form } from "@inertiajs/react";
import { register } from "@/routes";
import { store } from "@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <AuthLayout>
            <Form className="flex flex-col gap-4" action={store()}>
                {({ errors }) => (
                    <>
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className={`input input-bordered w-full ${errors.email && 'input-error'}`}
                                name="email"
                            />
                            <p className={`text-error ${!errors.email && 'hidden'}`}>{errors.email}</p>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className={`input input-bordered w-full pr-12 ${errors.password && 'input-error'}`}
                                    name="password"
                                />
                                <label className="swap absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                                    <input type="checkbox" onClick={() => setShowPassword(!showPassword)} />
                                    <div className="swap-on"><FaIcon icon={faEye} /></div>
                                    <div className="swap-off"><FaIcon icon={faEyeSlash} /></div>
                                </label>
                            </div>
                            <p className={`text-error ${!errors.password && 'hidden'}`}>{errors.password}</p>
                        </div>

                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <input type="checkbox" className="checkbox" name="remember" value={0} />
                                <span className="label-text ml-2">Remember me</span>
                            </label>
                        </div>

                        <button className="btn btn-primary btn-block" type="submit">Login</button>
                        <div className="divider">Dont have account</div>
                        <button className="btn btn-outline btn-secondary btn-block" type="button" onClick={() => router.get(register())}>Register</button>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}

export default LoginPage;
