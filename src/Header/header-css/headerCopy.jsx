import {
    faEllipsisVertical,
    faSearch,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "../Header/header-css/header.css";
  import { Image, Dropdown } from "react-bootstrap";
  import { Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
  import logo from "../logo.svg";
  import { faHeart, faBell } from "@fortawesome/free-regular-svg-icons";
  import { useState, useEffect } from "react";
  import React from "react";
  import Arrow from "../assert/arrow.png";
  
  const Header = () => {
    const [active, setActive] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    // const [showingInnerVal, setShowingInnerVal] = useState(false);
    const [status, setStatus] = useState("");
    console.log("status", status);
  
    const toggleDrawer = () => {
      setIsOpen(!isOpen);
    };
    // backdrop-filter: blur(8px);
    const categoryTabs = [
      { id: 1, title: <b>All Categories</b> },
      {
        id: 2,
        title: "Marketing and Advertising",
        childNavItems: [
          { title: "Alert" },
          { title: "Notification" },
          { title: "Message" },
          { title: "Wishlist" },
          { title: "Account" },
          { title: "Account settings" },
          { title: "Profile" },
          { title: "Publice Profile" },
          { title: "Edit Profile" },
          { title: "Logout Profile" },
        ],
      },
      {
        id: 3,
        title: "Sales and Customer Service",
        childNavItems: [{ title: "Sales and Customer Service" }],
      },
      {
        id: 4,
        title: "Financial Management",
        childNavItems: [{ title: "Financial Management" }],
      },
      {
        
        title: "Technology and Tools",
        childNavItems: [{ title: "Technology and Tools" }],
      },
      {
        
        title: "Product Sourcing and Manag,ment",
        childNavItems: [{ title: "Product Sourcing and Manag,ment" }],
      },
      {
        
        title: "Business Planning and Strategy",
        childNavItems: [{ title: "Business Planning and Strategy" }],
      },
    ];
  
    // const childNavTitles = categoryTabs[0]?.childNavItems?.map(item => item.title);
  
    // Convert the array of titles to a single string separated by commas
    // const childNavTitlesString = childNavTitles.join(", ");
  
    const returnChildNavItems = (id) =>
      categoryTabs.find((navItem) => navItem.id === id)?.childNavItems;
    // console.log("returnChildNavItems", returnChildNavItems);
    return (
      <>
        {/* Left side drawer */}
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          {/* Sidebar content */}
          <div className="sidebar-content">
            {/* Your sidebar content goes here */}
  
            <div className="menu-profile">
              <Image
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                roundedCircle
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
                className="mob-img"
              />
              <div className="username">
                <p className="user-name">Hi,Sachin</p>
                <p className="user-welcome">Welcome back</p>
              </div>{" "}
              <span onClick={() => setStatus("main")}>
                {/* &#9658; */}
                <img src={Arrow} alt="" style={{ width: 10 }} />
              </span>
            </div>
  
            <div className="redirect-view-link">
              <i style={{ color: "blue" }}>switch to instructor view</i>
            </div>
  
            <hr />
            <div className="middle-text">
              <Nav className="mr-auto mb-2 mb-lg-0">
                <Nav.Link href="#">
                  <span className="links">My Learning</span>
                </Nav.Link>
                <Nav.Link href="#">
                  <span className="links">My Programs</span>
                </Nav.Link>
              </Nav>
            </div>
            <hr />
  
            {returnChildNavItems(selectedId)
              ? returnChildNavItems(selectedId).map((item) => (
                  <>
                    {
                      <nav className="sub-menu">
                        <ul>
                          <li>{item.title}</li>
                        </ul>
                      </nav>
                      // <p>{item.title}</p>
                    }
                  </>
                ))
              : categoryTabs.map((element, index) => (
              
                  <li
                    key={index}
                    onClick={() => setActive(element.title)}
                    className={`sidebar-menu-item ${
                      active === element.title ? "active" : ""
                    }`}
                  >
                    <a style={{ color: "black" }} href="#">
                      {element.title}
                      <img
                        onClick={() => setSelectedId(element.id)}
                        src={Arrow}
                        alt=""
                        style={{ width: 10 }}
                      />
                    </a>
                  </li>
                ))}
  
            {status == "main" && (
              <div className="sub-menu">
                <div className="sunmenu-content">
                  <Nav className="mr-auto mb-2 mb-lg-0">
                    <h6 className="lefthead">Alert</h6>
                    <Nav.Link href="#">
                      <span className="links">Notification</span>
                    </Nav.Link>
                    <Nav.Link href="#">
                      <span className="links">Message</span>
                    </Nav.Link>
                    <Nav.Link href="#">
                      <span className="links">Wishlist</span>
                    </Nav.Link>
                    <hr />
                    <h6 className="lefthead">Account</h6>
                    <Nav.Link href="#">
                      <span className="links">Account settings</span>
                    </Nav.Link>
                    <Nav.Link href="#">
                      <span className="links">Payment methods</span>
                    </Nav.Link>
                    <hr />
                    <h6 className="lefthead">Profile</h6>
                    <Nav.Link href="#">
                      <span className="links">Publice Profile</span>
                    </Nav.Link>
                    <Nav.Link href="#">
                      <span className="links">Edit Profile</span>
                    </Nav.Link>
                    <Nav.Link href="#">
                      <span className="links">Logout Profile</span>
                    </Nav.Link>
                  </Nav>
                </div>
              </div>
            )}
  
            {/* {status == "Marketing and Advertising" && <div>Hello</div>} */}
          </div>
        </div>
  
        <header>
          {/* Header */}
          <Navbar expand="lg" bg="white" variant="default">
            <div className="container-fluid">
              <Navbar.Brand href="#">
                <img src={logo} alt="Logo" className="logo-image" />
              </Navbar.Brand>
  
              <div id="iconresponsive">
                <FontAwesomeIcon icon={faSearch} className="toggle-icon-mob" />
                <a className="text-reset me-3" href="#">
                  <i className="fas fa-shopping-cart toggle-icon-mob"></i>
                </a>
              </div>
  
              {/* Toggle Button (Only visible on mobile screens) */}
              <div className="toggle-button d-lg-none" onClick={toggleDrawer}>
                <div className={`toggle-icon ${isOpen ? "open" : ""}`} />
              </div>
  
              <Navbar.Collapse id="responsive-navbar-nav">
                <form className="d-flex input-group w-100% mr-auto">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span
                    className="input-group-text border-0 absolute"
                    id="search-addon"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </form>
  
                <Nav className="mr-auto mb-2 mb-lg-0">
                  <Nav.Link href="#">
                    <span className="links">Categories</span>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <span className="links">My Learning</span>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <span className="links">My Programs</span>
                  </Nav.Link>
                </Nav>
  
                <div className="d-flex align-items-center">
                  {/* Icon */}
                  <a className="text-reset me-3" href="#">
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                  <a className="text-reset me-3" href="#">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                  <a className="text-reset me-3" href="#">
                    <FontAwesomeIcon icon={faBell} />
                  </a>
                  <a className="text-reste me-3" href="#">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </a>
  
                  <Dropdown align="end" className="bg-transparent">
                    <Dropdown.Toggle
                      type=""
                      variant="transparent"
                      id="navbarDropdownMenuAvatar"
                    >
                      <Image
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        roundedCircle
                        height="25"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">My profile</Dropdown.Item>
                      <Dropdown.Item href="#">Settings</Dropdown.Item>
                      <Dropdown.Item href="#">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </header>
  
        <div className="border">
          <nav className="tabs">
            {/* <ul className="d-flex mb-lg-0 tabs"> */}
            <ul className="tabs__items">
              {categoryTabs.map((element, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setActive(element.title);
                    }}
                    className={`nav-item ${
                      active === element.title
                        ? index === 0
                          ? "border-end text-bold"
                          : "border"
                        : ""
                    }`}
                  >
                    <Nav.Link href="#">
                      <span
                        style={{
                          color: "#333333",
                        }}
                      >
                        {element.title}
                      </span>
                    </Nav.Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </>
    );
  };
  export default Header;

  