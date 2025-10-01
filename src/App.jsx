import { useMemo, useState } from "react"
import SideBar from "./components/SideBar"
import Dashboard from "./components/Dashboard"
import Projects from "./components/Projects"
import Doucments from "./components/Doucments"
import Reports from "./components/Reports"
import Calendar from "./components/Calendar"


const App = () => {
  const [open, setOpen] = useState(false)
  const [darkmode, setDarkmode] = useState({ name: "Light Mode", icon: "@", status: false })
  const [page, setPage] = useState("Dashboard")
  const handelDarkMode = () => {
    darkmode.status ? setDarkmode({ name: "Light Mode", icon: "@", status: false }) : setDarkmode({ name: "Dark Mode", icon: "%", status: true })
  }
  const handelOpen = () => {
    open ? setOpen(false) : setOpen(true)
  }
  const handelPage = (value) => {
    setPage(value)
  }
  const pages = [
    { name: "Dashboard", component: <Dashboard /> },
    { name: "Projects", component: <Projects /> },
    { name: "Doucments", component: <Doucments /> },
    { name: "Reports", component: <Reports /> },
    { name: "Calendar", component: <Calendar /> },
  ]
  const PageToBeRender = useMemo(() => {
    return pages.find(p => p.name == page)
  }, [page])
  return (
    <>
      <div className={`${darkmode.status ? "dark" : ""} bg-gray-100 min-h-screen flex dark:bg-gray-900`}>
        <SideBar open={open} handelOpen={handelOpen} darkmode={darkmode} handelDarkMode={handelDarkMode} page={page} handelPage={handelPage} />
        <main className="flex-1">
          <header className="bg-white dark:bg-gray-800 flex justify-between p-3.5 items-center">
            <button className="hover:bg-gray-200 duration-150 dark:text-gray-100 dark:hover:text-gray-900 rounded-full px-2 cursor-pointer lg:hidden" onClick={handelOpen}>X</button>
            <h1 className="text-2xl font-bold dark:text-gray-100">{page}</h1>
            <div className="h-10 w-10 bg-gray-400 dark:bg-gray-200 rounded-full"></div>
          </header>
          <div className="bg-gray-700 dark:bg-gray-500 w-full h-[2px]"></div>
          {PageToBeRender.component}
        </main>
      </div>
    </>
  )
}
export default App
