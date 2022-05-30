import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Squeeze as Hamburger } from "hamburger-react";
function Navbar(props) {
  const [isOpen, setOpen] = useState(false);

  console.log(props);
  return (
    <>
      <nav
        className="hidden w-full drop-shadow-md min-h-[60px] md:flex flex-col lg:sticky lg:top-0 z-40 bg-gray-100 font-montserrat"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="flex flex-col md:flex-row mx-auto">
          <img
            src={logo}
            alt="Sherwood Plumbing Logo"
            className=" pl-4 py-2 min-h-24 min-w-[256px] h-24 my-auto"
          />
          {/* <div className=" bg-primarydark-100 w-64 flex flex-col justify-center">
        <span className=" text-gray-50 text-lg mx-auto p-2 text-center font-medium">
          USE THE{" "}
          <span className="text-primarylight-100 font-semibold">BEST</span>.
          <br></br>FLUSH THE{" "}
          <span className="text-primarylight-100 font-semibold">REST</span>.
        </span>
        <span className="mx-auto text-primarylight-100 p-2 lg:text-xl font-semibold flex">
          <BsFillTelephoneFill
            height={10}
            width={10}
            className="my-auto mx-2"
          />{" "}
          0115 978 3273
        </span>
      </div> */}

          {/* Information */}
          <div className="flex-grow flex min-w-max bg-primarydark-100 max-w-[600px]">
            <div className="bg-primarylight-100 grow flex flex-col">
              <span className=" justify-center px-4 text-primarydark-100 text-lg mx-auto my-auto p-2 text-center font-semilight ">
                {props.openingDates}
                <br></br>
                {props.openingTimes}
              </span>
              <span className="mx-auto my-auto px-4 text-primarydark-100 pb-2 lg:text-xl font-semibold flex relative">
                <BsFillTelephoneFill
                  height={10}
                  width={10}
                  className="my-auto mx-2"
                />{" "}
                0115 978 3273
              </span>
            </div>
            <span className="text-primarylight-100 px-4 grow min-w-max bg-primarydark-100  text-lg mx-auto my-auto p-2 text-center font-semilight">
              {props.address.address_line_1}
              <br></br>
              {props.address.address_line_2}
              <br></br>
              {props.address.address_line_3}
            </span>
          </div>
          {/* Desktop navigation */}
          <DesktopNav currentRoute={props.currentRoute}></DesktopNav>
        </div>
      </nav>

      {/* Tablet navigation */}
      <TabletNav currentRoute={props.currentRoute}></TabletNav>

      {/* Mobile navbar */}
      <nav
        className="flex md:hidden justify-center w-full overflow-hidden sticky top-0 bg-gray-100 z-40 drop-shadow-md"
        role="navigation"
        aria-label="main-navigation"
      >
        <img
          src={logo}
          alt="Sherwood Plumbing Logo"
          className=" pl-4 py-2 min-h-24 min-w-[256px] h-24"
        />
        <div className="my-auto px-4 z-40 absolute top-0 right-0 translate-y-[50%]">
          <Hamburger color="black" toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 flex flex-col w-screen h-screen transition-all duration-300 bg-gray-100 z-50 ${
          isOpen ? "" : "translate-x-[100%]"
        }`}
      >
        <div className="absolute right-0 -translate-x-1/2 translate-y-1/2">
          <Hamburger color="black" toggled={isOpen} toggle={setOpen} />
        </div>
        <img
          src={logo}
          alt="Sherwood Plumbing Logo"
          className=" pl-4 py-2 min-h-24 min-w-[256px] h-24 "
        />
        <div className="flex bg-primarydark-100">
          <div className="bg-primarylight-100 grow flex flex-col">
            <span className=" justify-center text-primarydark-100 text-lg mx-auto my-auto p-2 text-center font-semilight ">
              {props.openingDates}
              <br></br>
              {props.openingTimes}
            </span>
            <span className="mx-auto my-auto text-primarydark-100 pb-2 lg:text-xl font-semibold flex relative">
              <BsFillTelephoneFill
                height={10}
                width={10}
                className="my-auto mx-2"
              />{" "}
              0115 978 3273
            </span>
          </div>
          <span className="text-primarylight-100 grow bg-primarydark-100  text-lg mx-auto my-auto p-2 text-center font-semilight">
            {props.address.address_line_1}
            <br></br>
            {props.address.address_line_2}
            <br></br>
            {props.address.address_line_3}
          </span>
        </div>
        {/* Desktop navigation */}
      </aside>
    </>
  );
}

export const TabletNav = (props) => {
  return (
    <ul className="hidden sticky top-0 z-40 list-none justify-evenly m-0 p-0 py-2 flex-grow md:flex lg:hidden bg-primarydark-100">
      {NavbarData.map((data, indx) => {
        return (
          <DesktopNavItem
            currentRoute={props.currentRoute}
            href={data.href}
            name={data.name}
            key={indx}
          />
        );
      })}
      {/* <li className="w-1/5 flex justify-center h-full"><Link className="font-montserrat my-auto text-2xl font-bold text-primarydark-100 hover:text-primarylight-100 hover:scale-110 transition-transform duration-150">Home</Link></li>
        <li>PUBLIC</li>
        <li>COMMERCIAL</li>
        <li>INFO</li>
        <li>CONTACT</li> */}
    </ul>
  );
};

export const NavbarData = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/public",
    name: "Public",
  },
  {
    href: "/commercial",
    name: "Commercial",
  },
  {
    href: "/info",
    name: "Info",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];
export const DesktopNav = (props) => {
  return (
    <>
      <ul className="hidden list-none lg:flex justify-between bg-gray-100 px-8">
        {NavbarData.map((data, indx) => {
          return (
            <DesktopNavItem
              currentRoute={props.currentRoute}
              href={data.href}
              name={data.name}
              key={indx}
            />
          );
        })}
        {/* <li className="w-1/5 flex justify-center h-full"><Link className="font-montserrat my-auto text-2xl font-bold text-primarydark-100 hover:text-primarylight-100 hover:scale-110 transition-transform duration-150">Home</Link></li>
        <li>PUBLIC</li>
        <li>COMMERCIAL</li>
        <li>INFO</li>
        <li>CONTACT</li> */}
      </ul>
    </>
  );
};
export const DesktopNavItem = (props) => {
  return (
    <li className="flex px-4 justify-center h-full">
      <Link
        href={props.href}
        className="font-montserrat md:hover:text-primarylight-100 md:text-white lg:text-primarydark-100 w-full h-full flex my-auto text-base font-medium text-primarydark-100 hover:text-primarydark-100 hover:scale-110 hover:font-bold transition-all duration-150"
      >
        <span
          className={`my-auto ${
            props.currentRoute === props.href
              ? "border-b-2 border-primarylight-100"
              : ""
          }`}
        >
          {props.name}
        </span>
      </Link>
    </li>
  );
};
// export const query = graphql`
// query NavbarQuery {
//   markdownRemark(frontmatter: {templateKey: {eq: "navbar"}}) {
//     frontmatter {
//       openingTimes
//       openingDates
//     }
//   }
// }
// `
export default Navbar;
