import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const MainLayout = () => {
  return (
    <div className="w-11/12 m-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
