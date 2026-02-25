import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@inertiajs/react';
import { login, register, dashboard } from '@/routes';

interface User {
    id: number
    name: string
    email: string
}

interface WelcomeProps {
    canLogin: boolean,
    canRegister: boolean,
    auth: {
        user: User | null
    }
}

const Welcome: React.FC<WelcomeProps> = ({ auth, canLogin, canRegister }) => {
    return (
        <>
            <div className="h-screen bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                {/* Background Image */}
                <img
                    className="absolute h-full w-full object-cover"
                    src="https://app.clttoolbox.com.au/images/login-bg.jpg"
                    alt="Background"
                />

                {/* Dark Overlay with Blur Animation */}
                <div className="absolute inset-0 bg-black/40 animate-blur-in"></div>

                <div className="relative h-full flex flex-col">
                    {/* Header */}
                    <header className="py-4 px-10">
                        {canLogin && auth.user && (
                            <nav className="flex justify-end animate-fade-in">
                                <Link
                                    href={dashboard()}
                                    className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-gray-100 focus:outline-none focus-visible:ring-[#FF2D20] text-gray-200"
                                >
                                    Dashboard
                                </Link>
                            </nav>
                        )}
                    </header>

                    {/* Center Content */}
                    <div className="flex-1 flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                        <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">

                            {/* Logo */}
                            <div className="grid grid-cols-2 items-center gap-4 py-10 lg:grid-cols-3">
                                <div className="flex lg:justify-center lg:col-start-2">
                                    <img
                                        src="https://app.clttoolbox.com.au/images/logos/logo_color_white.png"
                                        alt="Logo"
                                        className="animate-fade-in"
                                    />
                                </div>
                            </div>

                            {/* Auth Links */}
                            {canLogin && !auth.user &&  (
                                <div className="flex flex-col items-center gap-2 mt-6 animate-fade-in">

                                    <Link
                                        href={login()}
                                        className="text-xl rounded-md py-2 text-gray-200 ring-1 ring-transparent transition hover:text-white focus:outline-none focus-visible:ring-[#FF2D20]"
                                    >
                                        Log in
                                    </Link>

                                    {canRegister && (
                                        <Link
                                            href={register()}
                                            className="text-xl rounded-md py-2 text-gray-200 ring-1 ring-transparent transition hover:text-white focus:outline-none focus-visible:ring-[#FF2D20]"
                                        >
                                            Register
                                        </Link>
                                    )}
                                </div>
                            )}

                            <footer className="py-16 text-center text-sm text-black dark:text-white/70"></footer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome;
