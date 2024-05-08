import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header
      className="NewNavbar_nav_cont_dark__jxRzF head"
      style={{ display: "flex" }}
    >
      <nav className="NewNavbar_nav_block__Kt2BG">
        <div>
          <a className="imgLink" href="/">
            <img
              width="80"
              height="70"
              style={{
                color: "transparent",
                marginTop: "8px",
                paddingTop: "2px",
              }}
              src="images/logo.png"
            />
          </a>
        </div>
        <div className="nav__menu-bar">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="nav__menu-list">
          <div>
            <a
              className="nav__link"
              target="_blank"
              style={{ color: "black" }}
              href="https://makemyweb.ai/"
            >
              MakeMyWeb.
            </a>
          </div>
          <div>
            <a
              className="nav__link active"
              target=""
              style={{ color: "black" }}
              href="/"
            >
              Home
            </a>
          </div>
          <div>
            <Link
              className="nav__link"
              target=""
              style={{ color: "black" }}
              href="../About"
            >
              Company
            </Link>
          </div>
          <div>
            <a
              className="nav__link"
              target=""
              style={{ color: "black" }}
              href="blogs.html"
            >
              Blogs
            </a>
          </div>
          <button className="themeBtn" style={{ display: "flex" }}>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
