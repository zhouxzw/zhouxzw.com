import Link from "next/link";
import { useEffect, useState } from "react";

import { BsList, BsX } from "react-icons/bs";

function Navbar(props) {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const [position, setPosition] = useState(130);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const scroll = (e) => {
      if (window.pageYOffset < 130) {
        setShow(true);
        setPosition(window.pageYOffset);
      } else if (window.pageYOffset < position) {
        setShow(true);
        setPosition(window.pageYOffset);
      } else {
        setShow(false);
        setPosition(window.pageYOffset);
      }
    };
    window.removeEventListener("scroll", scroll);
    window.addEventListener("scroll", scroll), { passive: true };
    return () => window.removeEventListener("scroll", scroll);
  }, [position, show]);

  const redirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <nav className={show ? "nav-container active" : "nav-container hide"}>
      <Link href="/" passHref={true}>
        <header className="nav-title">zhouxzw</header>
      </Link>

      <div className={dropdown ? "dropdown-menu open" : "dropdown-menu"}>
        <Link href="/" passHref={true}>
          <li onClick={() => toggleDropdown()}>
            <a>About</a>
          </li>
        </Link>

        <Link href="/#projects" passHref={true}>
          <li onClick={() => toggleDropdown()}>
            <a>Projects</a>
          </li>
        </Link>
        <li
          onClick={() => {
            toggleDropdown();
            redirect("/files/resume.pdf");
          }}
        >
          <a>Resume</a>
        </li>
      </div>

      <div className="dropdown-button" onClick={() => toggleDropdown()}>
        {dropdown ? (
          <BsX size="2rem" color="white"></BsX>
        ) : (
          <BsList size="1.8rem" color="white"></BsList>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
