import AuthLayout from "@/layouts/AuthLayout";
import { useState } from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { router, Form } from "@inertiajs/react";
import { login } from "@/routes";
import { store } from "@/actions/App/Http/Controllers/Auth/RegisteredUserController";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <AuthLayout>
            <Form className="flex flex-col gap-4" action={store()}>
                {({ errors }) => (
                    <>
                        <div>
                            <label className="label">
                                <span className="label-text">Nama Lengkap</span>
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className={`input input-bordered w-full ${errors.name && 'input-error'}`}
                                name="name"
                            />
                            <p className={`text-error ${!errors.name && 'hidden'}`}>{errors.name}</p>
                        </div>

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

                        <div>
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className={`input input-bordered w-full pr-12 ${errors.password_confirmation && 'input-error'}`}
                                    name="password_confirmation"
                                />
                                <label className="swap absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                                    <input type="checkbox" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                                    <div className="swap-on"><FaIcon icon={faEye} /></div>
                                    <div className="swap-off"><FaIcon icon={faEyeSlash} /></div>
                                </label>
                            </div>
                            <p className={`text-error ${!errors.password_confirmation && 'hidden'}`}>{errors.password_confirmation}</p>
                        </div>

                        <button className="btn btn-primary btn-block" type="submit">Register</button>
                        <div className="divider">Alerady have account</div>
                        <button className="btn btn-outline btn-secondary btn-block" type="button" onClick={() => router.get(login())}>Login</button>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}

export default RegisterPage;
