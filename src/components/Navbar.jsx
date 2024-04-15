import { nav } from "../../src/constants/index.js";
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 tracking-wide  ">
      <div className="flex gap-x-2 justify-center items-center">
        <div className="logo">T</div>
        <h3 className="nav-text">Trafalgar</h3>
      </div>
      <div className="flex gap-x-6 max-md:hidden">
        {nav.map((navigation) => {
          return (
            <div key={navigation.id}>
              <a href={navigation.href} className="nav-text">
                {navigation.title}
              </a>
            </div>
          );
        })}
      </div>
      <div className="hidden max-md:block">
        <TiThMenuOutline
          style={{
            color: "#1F1534",
            opacity: "50%",
          }}
          size="1.3em"
        />
      </div>
    </nav>
  );
};

export default Navbar;
