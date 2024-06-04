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
import lessthanArrow from "../assert/less-than.svg";

const Header = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // const [showingInnerVal, setShowingInnerVal] = useState(false);
  const [status, setStatus] = useState({ title: "main", index: 0 });

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  // backdrop-filter: blur(8px);
  const categoryTabs = [
    {
      title: "Marketing and Advertising",
      subCategory: ["SubCategor111", "SubCategor111", "SubCategor111"],
    },
    {
      title: "Sales and Customer Service",
      subCategory: ["SubCategor222", "SubCategor222", "SubCategor222"],
    },
    {
      title: "Financial Management",
      subCategory: ["SubCategor333", "SubCategor333", "SubCategor333"],
    },
    {
      title: "Technology and Tools",
      subCategory: ["SubCategor444", "SubCategor444", "SubCategor444"],
    },
    {
      title: "Product Sourcing and Manag,ment",
      subCategory: ["SubCategor555", "SubCategor555", "SubCategor555"],
    },
    {
      title: "Business Planning and Strategy",
      subCategory: ["SubCategor666", "SubCategor666", "SubCategor666"],
    },
  ];

  return (
    <>
      {/* Left side drawer */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Sidebar content */}
        {status.title === "main" && (
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
              </div>
              <span>
                <img
                  onClick={() =>
                    setStatus((prev) => ({
                      ...prev,
                      title: "profile",
                    }))
                  }
                  src={Arrow}
                  alt=""
                  style={{ width: 10 }}
                />
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
            <nav>
              <ul>
                <li>
                  <b> All Categories </b>
                </li>
                {categoryTabs.map((element, index) => {
                  return (
                    <li key={index}>
                      {element.title}
                      <span className="greaterthen">
                        <img
                          onClick={() => {
                            setStatus((prev) => ({
                              ...prev,
                              index: index,
                              title: element.title,
                            }));
                          }}
                          src={Arrow}
                          alt=""
                          style={{ width: 10 }}
                        />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}

        {status.title == categoryTabs[status.index].title && (
          <div className="sidebar-content">
            {/* Your sidebar content goes here */}
            <div className="sub-main">
              <div className="sub-menu-profile">
                <span>
                  <img
                    onClick={() =>
                      setStatus((prev) => ({
                        ...prev,
                        title: "main",
                        index: 0,
                      }))
                    }
                    src={lessthanArrow}
                    alt=""
                    style={{ width: 17 }}
                  />
                </span>
                <div className="sub-menu-div">
                  <p className="menu-name">Menu</p>
                </div>
              </div>
            </div>
            <div className="navlinkinsubmenu">
              <Nav className="mr-auto mb-2 mb-lg-0">
                {categoryTabs[status.index].subCategory.map((values) => {
                  return (
                    <Nav.Link href="#">
                      <span className="links">{values}</span>
                    </Nav.Link>
                  );
                })}
              </Nav>
            </div>
          </div>
        )}

        {status.title == "profile" && (
          <>
            <div className="sidebar-content">
              {/* Your sidebar content goes here */}
              <div className="sub-main">
                <div className="sub-menu-profile">
                  <span>
                    <img
                      onClick={() =>
                        setStatus((prev) => ({
                          ...prev,
                          title: "main",
                          index: 0,
                        }))
                      }
                      src={lessthanArrow}
                      alt=""
                      style={{ width: 17 }}
                    />
                  </span>
                  <div className="sub-menu-div">
                    <p className="menu-name">Menu</p>
                  </div>
                </div>
              </div>
              <div className="navlinkinsubmenu">
                <Nav className="mr-auto mb-2 mb-lg-0">
                  <h6>Alert</h6>
                  <Nav.Link href="#">
                    <span className="links">Notification</span>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <span className="links">Message</span>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <span className="links">Wishlist</span>
                  </Nav.Link>
                  <h6>Account</h6>
                  <Nav.Link href="#">
                    <span className="links">Account setting</span>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <span className="links">Payment methods</span>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <span className="links">Subscriptions</span>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <span className="links">Udemy credits</span>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <span className="links">Purchase history</span>
                  </Nav.Link>
                  <h6>Profile</h6>
                  <Nav.Link href="#">
                    <span className="links">Publice profile </span>
                  </Nav.Link>  <Nav.Link href="#">
                    <span className="links">Edit profile</span>
                  </Nav.Link>  <Nav.Link href="#">
                    <span className="links">Log out</span>
                  </Nav.Link>
                </Nav>
              </div>
            </div>
          </>
        )}
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
