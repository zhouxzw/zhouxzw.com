import Link from "next/link";
import { useEffect, useState } from "react";

import { BsList, BsX } from "react-icons/bs";

function Navbar(props) {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const [position, setPosition] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const scroll = (e) => {
      if (window.pageYOffset > position) {
        setShow(false);
        setPosition(window.pageYOffset);
      } else {
        setShow(true);
        setPosition(window.pageYOffset);
      }
    };
    window.removeEventListener("scroll", scroll);
    window.addEventListener("scroll", scroll), { passive: true };
    return () => window.removeEventListener("scroll", scroll);
  }, [position, show]);

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
            <a>Project</a>
          </li>
        </Link>
        <li onClick={() => toggleDropdown()}>Resume</li>
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
