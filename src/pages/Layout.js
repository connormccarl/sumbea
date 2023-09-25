import { Outlet, Link } from "react-router-dom";

const Layout = () =>  {
    return (
        <div className="App">
            <header className="App-header">
                <Link to="/">
                    <img src="./sumbea_horizontal.png" alt="Sumbea Logo" />
                </Link>
            </header>

            <Outlet />

            <footer>
                <div>Sumbea.org | Harmonious Living Magazine | <Link to="/pdf">FREE Radiation PDF</Link></div>
            </footer>
        </div>
    );
};

export default Layout;