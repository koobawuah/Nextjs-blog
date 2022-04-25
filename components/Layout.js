import Navbar from "./Navbar"

const Layout = ({ children }) => {

    return (
        <div className="p-6">
            <Navbar />
            {children} 
        </div>
    )
}

export default Layout
