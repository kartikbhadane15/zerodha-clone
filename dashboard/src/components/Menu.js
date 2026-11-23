import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  PersonOutlineOutlined,
  AssessmentOutlined,
  MonetizationOnOutlined,
  HelpOutlineOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState({ username: "USERID", email: "" });
  const dropdownRef = useRef(null);

  // Fetch logged in user profile via backend /verify cookie
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3002/verify",
          {},
          { withCredentials: true }
        );
        if (data && data.status) {
          setUser({
            username: data.user || "USERID",
            email: data.email || "",
          });
        }
      } catch (err) {
        console.error("Profile verify error:", err);
      }
    };

    verifyUser();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3002/logout",
        {},
        { withCredentials: true }
      );
    } catch (err) {
      console.error(err);
    }
    // Clear cookie & redirect to login on frontend
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "http://localhost:3000/login";
  };

  // Initials for avatar
  const getInitials = (name) => {
    if (!name) return "ZU";
    const parts = name.trim().split(" ");
    if (parts.length > 1) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Zerodha Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />

        {/* PROFILE AVATAR & DROPDOWN */}
        <div className="profile-wrapper" ref={dropdownRef}>
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{getInitials(user.username)}</div>
            <p className="username">{user.username}</p>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-header">
                <div className="dropdown-avatar">{getInitials(user.username)}</div>
                <div className="dropdown-user-details">
                  <h4 className="dropdown-username">{user.username}</h4>
                  <p className="dropdown-email">{user.email || "Active Trader"}</p>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <ul className="dropdown-list">
                <li onClick={() => setIsProfileDropdownOpen(false)}>
                  <PersonOutlineOutlined className="dropdown-mui-icon" />
                  <span>My Profile</span>
                </li>
                <li onClick={() => setIsProfileDropdownOpen(false)}>
                  <AssessmentOutlined className="dropdown-mui-icon" />
                  <span>Console Reports</span>
                </li>
                <li onClick={() => setIsProfileDropdownOpen(false)}>
                  <MonetizationOnOutlined className="dropdown-mui-icon" />
                  <span>Coin Mutual Funds</span>
                </li>
                <li onClick={() => setIsProfileDropdownOpen(false)}>
                  <HelpOutlineOutlined className="dropdown-mui-icon" />
                  <span>Support & User Manual</span>
                </li>
              </ul>
              <div className="dropdown-divider"></div>
              <div className="dropdown-footer">
                <button className="dropdown-logout-btn" onClick={handleLogout}>
                  <LogoutOutlined className="dropdown-logout-icon" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
