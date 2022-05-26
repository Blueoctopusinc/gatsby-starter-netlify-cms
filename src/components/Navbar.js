import React from "react";
import { Link } from "gatsby";
import logo from '../../assets/logo.svg';
import {BsFillTelephoneFill} from 'react-icons/bs';
import { useStaticQuery, graphql } from "gatsby"




function Navbar(props, {data}) {
  
  return (
<nav
        className="w-full min-h-[60px] sticky top-0 flex z-50 bg-white font-montserrat"
        role="navigation"
        aria-label="main-navigation"
      >
        <img src={logo} alt='Sherwood Plumbing Logo' className="m-4 h-24"/>
        <div className=" bg-primarydark-100 w-64 flex flex-col">
            <span className=" text-gray-50 h-1/2 text-xl mx-auto p-2 text-center font-medium">USE THE <span className="text-primarylight-100 font-semibold">BEST</span>.<br></br>FLUSH THE <span className="text-primarylight-100 font-semibold">REST</span>.</span>
            <span className="mx-auto text-primarylight-100 my-auto text-2xl font-semibold flex"><BsFillTelephoneFill height={10} width={10}  className='my-auto mx-2'/> 0115 978 3273</span>
        </div>
        <div className=" bg-primarylight-100 w-64 flex flex-col">
            <span className=" text-primarydark-100 h-1/2 text-xl mx-auto p-2 text-center font-semibold ">{props.openingDates}<br></br>{props.openingTimes}</span>
            <span className="mx-auto text-primarylight-100 my-auto text-2xl font-bold flex"><BsFillTelephoneFill height={10} width={10}  className='my-auto mx-2'/> 0115 978 3273</span>
        </div>
      </nav>  )
}
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