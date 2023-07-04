import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import StateContext from "../GlobalContext/StateContext";

const CustomNavbar = (args) => {
  const { sharedState, updateState } = useContext(StateContext);
  const isAlreadyLoggedIn = async () => {
    const jwtCookie = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(Cookies.get("jwt"));
      }, 0);
    });

    if (jwtCookie && jwtCookie !== "") {
      return true;
    } else {
      return false;
    }
  };

  const logout = async (req, res) => {
    try {
      const isLoggedin = await isAlreadyLoggedIn();
      if (isLoggedin === true) {
        Cookies.remove("jwt");
        alert("User logout successfully!");
        updateState("Login");
      } else {
        console.log("Ooooooooh god it's working!!!!!");
        alert("Invalid Request.Please login first.");
      }
    } catch (error) {
      alert(JSON.stringify(error.response.data.error));
      return;
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 cursor-pointer">
        <Link className="navbar-brand" to="/homepage">
          netAIsys
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link">Blogs</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link cursor-pointer" to="/homepage">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/homepage">
                Consulting
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/homepage">
                Career
              </Link>
            </li>
            <li className="nav-item text-primary cursor-pointer">
              <Link className="nav-link" to="/" onClick={logout}>
                {sharedState}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
  // const [isOpen, setIsOpen] = useState(true);

  // const toggle = () => setIsOpen(!isOpen);

  // return (
  //   <div>
  //     <Navbar {...args}>
  //       <NavbarBrand href="/">reactstrap</NavbarBrand>
  //       <NavbarToggler onClick={toggle} />
  //       <Collapse isOpen={isOpen} navbar>
  //         <Nav classNameName="me-auto" navbar>
  //           <NavItem>
  //             <NavLink href="/components/"></NavLink>
  //           </NavItem>
  //           <NavItem>
  //             <NavLink tags={ReactLink} to="/login  ">
  //               Blogs
  //             </NavLink>
  //           </NavItem>
  //           <UncontrolledDropdown nav inNavbar>
  //             <DropdownToggle nav caret>
  //               Courses
  //             </DropdownToggle>
  //             <DropdownMenu right>
  //               <DropdownItem>Career</DropdownItem>
  //               <DropdownItem>About Us</DropdownItem>
  //             </DropdownMenu>
  //           </UncontrolledDropdown>
  //         </Nav>
  //         <NavbarText>
  //           <p style={{ cursor: "pointer" }} tag={ReactLink} to="/signp">
  //             LOGIN
  //           </p>
  //         </NavbarText>
  //       </Collapse>
  //     </Navbar>
  //   </div>
  // );
};

export default CustomNavbar;
