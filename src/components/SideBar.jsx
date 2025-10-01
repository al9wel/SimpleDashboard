
const SideBar = ({ open, handelOpen, darkmode, handelDarkMode, page, handelPage }) => {
    const navItems = [
        { name: "Dashboard", icon: "!" },
        { name: "Projects", icon: "!" },
        { name: "Doucments", icon: "!" },
        { name: "Reports", icon: "!" },
        { name: "Calendar", icon: "!" },
    ]
    return (
        <>
            <div className={`${open ? "translate-x-0" : "-translate-x-64"}  lg:translate-x-0 bg-white min-h-screen w-64 shadow fixed lg:static dark:bg-gray-800 border-r-[2px] border-gray-700 dark:border-gray-500 `}>
                <div className="flex p-4 justify-between">
                    <h1 className="text-xl font-bold dark:text-gray-100">LOGO</h1>
                    <button className="hover:bg-gray-200 duration-150 dark:text-gray-100 dark:hover:text-gray-900 rounded-full px-2 cursor-pointer lg:hidden" onClick={() => handelOpen()}>X</button>
                </div>
                <div className="bg-gray-700 dark:bg-gray-500 mt-[8px] w-full h-[2px]"></div>
                <div className="p-4 space-y-2">
                    {navItems.map((item) => {
                        return (
                            <button key={item.name} onClick={() => handelPage(item.name)} className={`${page == item.name ? "bg-gray-700 text-gray-100 dark:bg-gray-200 dark:text-gray-900" : ""} flex p-2 gap-4 duration-150  hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-900 dark:text-gray-100 dark:border-gray-100 w-full rounded-md border border-gray-900 cursor-pointer`}>
                                <div className="text-xl">{item.icon}</div>
                                <div className="text-xl">{item.name}</div>
                            </button>
                        )
                    })}
                    <div className="bg-gray-700 dark:bg-gray-500 w-full h-[2px]"></div>
                    <button onClick={() => handelDarkMode()} className="flex p-2 gap-4 duration-150 hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-900 dark:text-gray-100 dark:border-gray-100 w-full rounded-md border border-gray-900 cursor-pointer">
                        <div className="text-xl">{darkmode.icon}</div>
                        <div className="text-xl">{darkmode.name}</div>
                    </button>
                </div>
            </div>
        </>
    )
}
export default SideBar