import { Link } from "react-router-dom"

export const NavBar = () => {
  return(
    <nav className="flex text-lg w-screen bg-gray-600 h-12">
			<Link className="p-2 ml-4 text-white hover:text-green-600" to="/1">Home</Link>
			<Link className="p-2 ml-4 text-white hover:text-green-600" to="/add">Add</Link>
		</nav>
  )
}