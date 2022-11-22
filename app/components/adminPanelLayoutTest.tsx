import { useRouter } from "next/router"
import { ReactNode } from "react"
import useAuth from "../hooks/useAuth"
import SidebarPanelLayoutTest from "./admin/layouts/sidebarPanelLayoutTest"


interface Props {
    children: ReactNode
}

const AdminPanelLayoutTest = ({ children }: Props) => {
    const router = useRouter();
    const { user, error, loading } = useAuth();

    if (loading) return <h1>Loading ...</h1>

    if (error) {
        // show error
        router.push('/auth/login')
        return <></>;
    }

    // if (!user?.is_admin) {
    //     router.push('/')
    //     return <></>;
    // }

    return (
        <>
            <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
                <SidebarPanelLayoutTest />
                <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                    <header className="header bg-white shadow py-4 px-4">
                        <div className="header-content flex items-center flex-row">
                            <form action="#">
                                <div className="hidden md:flex relative">
                                    <div
                                        className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>

                                    <input
                                        id="search"
                                        type="text"
                                        name="search"
                                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
                                        placeholder="Search..."
                                    />
                                </div>
                                <div className="flex md:hidden">
                                    <a href="#" className="flex items-center justify-center h-10 w-10 border-transparent">
                                        <svg
                                            className="h-6 w-6 text-gray-500"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </a>
                                </div>
                            </form>
                            <div className="flex mr-auto">
                                <a className="flex flex-row items-center">
                                    <img
                                        src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
                                        className="h-10 w-10 bg-gray-200 border rounded-full"
                                    />
                                    <span className="flex flex-col ml-2">
                                        <span className="truncate w-20 font-semibold tracking-wide leading-none">John Doe</span>
                                        <span className="truncate w-20 text-gray-500 text-xs leading-none mt-1">Manager</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </header>
                    <div className="main-content flex flex-col flex-grow p-4">
                        <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>

                        <div
                            className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4"
                        ></div>
                    </div>
                    <footer className="footer px-4 py-6">
                        <div className="footer-content">
                            <p className="text-sm text-gray-600 text-center">© Brandname 2020. All rights reserved. <a href="https://twitter.com/iaminos">by iAmine</a></p>
                        </div>
                    </footer>
                </main>
            </div>
        </>
    )
}


export default AdminPanelLayoutTest;