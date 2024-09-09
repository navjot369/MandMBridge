import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <header className="w-full h-28 flex justify-around items-center">
        <div className="font-bold text-4xl">M&Mbridge</div>
        <div className="w-1/3 flex justify-around">
          <div className="flex items-center border-none bg-[#aea294] rounded-xl px-3 py-3">
            <IoIosSearch className="text-black text-2xl mr-2" />
            <input
              className="border-none bg-transparent text-black placeholder:text-black focus:outline-none w-full"
              placeholder="Browse mentors..."
            />
          </div>
          <button>About Us</button>
        </div>
        <div>
          <button className="border-2 border-[#aea294] px-2 rounded-xl">Sign Up</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;