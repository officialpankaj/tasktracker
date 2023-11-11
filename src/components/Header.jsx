import logo from "../assets/logo.svg";

function Header() {
  return (
    <div className="base-container flex justify-between bg-white py-3">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="mr-2"/>
        <h3 className="text-[24px] font-bold">TIME TRACKER</h3>
      </div>
      <div>
        Total Time Spend <span className="ml-3 font-semibold">1 hour 35 mins</span>
      </div>
    </div>
  );
}

export default Header;
