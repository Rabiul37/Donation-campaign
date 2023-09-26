import Logo from "./Navbar/Logo";
import NavigationLink from "./Navbar/NavigationLink";

const Header = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row justify-between items-center mt-5">
      <Logo></Logo>
      <NavigationLink></NavigationLink>
    </div>
  );
};

export default Header;
