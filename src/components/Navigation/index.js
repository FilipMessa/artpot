import * as React from 'react'

// import { Location } from '@reach/router'
// import { Spring } from 'react-spring/renderprops'
import NavItem from './NavItem'
// import SubNavigation from './SubNavigation'

// TODO toggle animation
// TODO REACT-markdownR
// TODO REACT-IMAGES

// const Navigation = () => (
//   <Location>
//     {({ location }) => {
//       // const withSubNav = location.pathname.includes('/works')

//       return (
//         <nav>
//           <ul>
//             <NavItem label="home" to="" />
//             <NavItem label="info" to="info" />
//             <NavItem label="works" to="works" partiallyActive />
//             {/* <Spring from={{ opacity: 0 }} to={{ opacity: withSubNav ? 1 : 0 }}>
//               {styles => (
//                 <div style={styles}>
//                   <SubNavigation />
//                 </div>
//               )}
//             </Spring> */}
//           </ul>
//         </nav>
//       )
//     }}
//   </Location>
// )

const Navigation = () => (
  <nav>
    <ul>
      <NavItem label="home" to="" />
      <NavItem label="info" to="info" />
      <NavItem label="works" to="works" partiallyActive />
    </ul>
  </nav>
)

export default Navigation
