import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { logout } from '@/routes'
import { Link } from '@inertiajs/react'

const DashboardPage = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FaIcon icon={faBarsStaggered} size='lg' />
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Dashboard</a></li>
                            <li><a>Supplies</a></li>
                            <li><a>Layups</a></li>
                            <li><a>Layers</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">CLT Layup</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Dashboard</a></li>
                        <li><a>Supplies</a></li>
                        <li><a>Layups</a></li>
                        <li><a>Layers</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaIcon icon={faBell} size='lg' />
                            <span className="indicator-item status status-primary"></span>
                        </div>
                    </button>
                    <div className="divider divider-horizontal"></div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><Link href={logout()}>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='px-4 pt-4'>
                Youre logged in
            </div>
        </>
    );
}

export default DashboardPage;
