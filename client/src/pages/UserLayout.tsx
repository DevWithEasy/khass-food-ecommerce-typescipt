
// import {Header,Footer} from '../components/Index'
import React from "react";

const UserLayout = ({children} : React.PropsWithChildren) => {
  return <>
    {/* <Header/> */}
    <div
      className='w-11/12 mx-auto'
    >
      {children}
    </div>
    {/* <Footer/> */}
  </>;
};

export default UserLayout;
