const Navbar = ()=>{
    return(
        <>
            <header className="w-full  h-28 flex justify-around items-center">
                <div className="font-bold text-4xl">M&MBridge</div>
                <div className="w-1/3 flex justify-around">
                <input className="border-none py-3 px-3 text-black bg-[#aea294] rounded-xl  placeholder:text-black" placeholder="search mentor"/>
                <button>About Us</button>
                </div>
                <div>
                    <button>Sign Up</button>
                </div>
            </header>
        </>
    )
}

export default Navbar;