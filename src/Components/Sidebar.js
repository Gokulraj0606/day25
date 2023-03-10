import React, {useState} from "react";
import {Collapse} from "bootstrap"
import { Link } from "react-router-dom";

function Sidebar() {
    const [toggleComponents, setToggleComponents] = useState(false);
    const [toggleUtilities, setToggleUtilities] = useState(false);
    const [togglePages, setTogglePages] = useState(false);
    const handleCollapseComponent = () => {
        setToggleComponents(!toggleComponents);
        var myCollapse = document.getElementById("collapseComponents");
        var bsCollapse = new Collapse(myCollapse);
        toggleComponents ? bsCollapse.show() : bsCollapse.hide();
    }

    const handlCollapseUtilities = () => {
        setToggleUtilities(!toggleUtilities);
        var myCollapse = document.getElementById("collapseUtilities");
        var bsCollapse = new Collapse(myCollapse);
        toggleUtilities ? bsCollapse.show() : bsCollapse.hide();
    }

    const handleCollapsePages = () => {
        setTogglePages(!togglePages);
        var myCollapse = document.getElementById("collapsePages");
        var bsCollapse = new Collapse(myCollapse);
        togglePages ? bsCollapse.show() : bsCollapse.hide();
    }
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
            <Link className="nav-link" to="/dashboard">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
            Interface
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
            <a className="nav-link collapsed" onClick={handleCollapseComponent} data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog"></i>
                <span>Components</span>
            </a>
            <div id="collapseComponents" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    <Link className="collapse-item" to="/button">Buttons</Link>
                    <Link className="collapse-item" to="/card">Cards</Link>
                </div>
            </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
            <a className="nav-link collapsed" onClick={handlCollapseUtilities} data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Utilities:</h6>
                    <Link className="collapse-item" to="/color">Colors</Link>
                    <Link className="collapse-item" to="/border">Borders</Link>
                    <Link className="collapse-item" to="/animation">Animations</Link>
                    <Link className="collapse-item" to="/Other">Others</Link>
                </div>
            </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
            Addons
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
            <a className="nav-link collapsed" onClick={handleCollapsePages} data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages">
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Login Screens:</h6>
                    <Link className="collapse-item" to="/login">Login</Link>
                    <Link className="collapse-item" to="/register">Register</Link>
                    <Link className="collapse-item" to="/forgotpassword">Forgot Password</Link>
                    <div className="collapse-divider"></div>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <Link className="collapse-item" to="/404page">404 Page</Link>
                    <Link className="collapse-item" to="/blankpage">Blank Page</Link>
                </div>
            </div>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
            <Link className="nav-link" to="/chart">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></Link>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
            <Link className="nav-link" to="/table">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span></Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        {/* <!-- Sidebar Message --> */}
        <div className="sidebar-card d-none d-lg-flex">
            <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
            <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
            <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
        </div>

    </ul>
    )
}
export default Sidebar;