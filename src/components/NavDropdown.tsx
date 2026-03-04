import { useState, useRef, useEffect } from "react";
import isMobile from "./hooks/IsMobile";

interface NavDropdownProps {
  actionMain: (page: string) => void;
}

export default function NavDropdown({ actionMain }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobile = isMobile();

  const handleClick = (location: string) => {
    actionMain(location);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mobile) {
    return (
      <div className="links">
        <p className="link" onClick={() => handleClick("landing")}>
          Home
        </p>
        <p className="link" onClick={() => handleClick("resume")}>
          Resume
        </p>
        <p className="link" onClick={() => handleClick("about")}>
          About
        </p>
        <p className="link" onClick={() => handleClick("website")}>
          Website
        </p>
      </div>
    );
  }

  return (
    <div className="nav-Button" ref={dropdownRef}>
      <button
        className={isOpen ? "opened-button" : ""}
        onClick={() => setIsOpen(!isOpen)}
      >
        Pages
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <p className="links" onClick={() => handleClick("landing")}>
            Home
          </p>
          <p className="links" onClick={() => handleClick("resume")}>
            Resume
          </p>
          <p className="links" onClick={() => handleClick("about")}>
            About
          </p>
          <p className="links" onClick={() => handleClick("website")}>
            Website
          </p>
        </ul>
      )}
    </div>
  );
}
