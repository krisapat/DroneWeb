import Link from "next/link"
import Menu from "./nav_com/Menu"

const Navbar = async () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 dark:bg-black/80 border-b-2 border-gray-400">
      <div className="w-full flex items-center justify-between px-4 md:px-20 h-15 kanitFont">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="font-extrabold text-3xl text-primary kanitFont">
            DroneAPI
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="flex space-x-2 ">
          <Menu/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
