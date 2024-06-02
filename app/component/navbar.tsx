"use client"

const Navbar = () => {

    
    return (
        <nav className="bg-gray-800  w-full sticky top-0 z-[999]">
            <div className=" px-2  lg:px-8">
                <div className=" flex h-16 items-center justify-between">
                    <div className="flex  items-center justify-center ">
                        <div className="flex items-start">
                            <a className="text-2xl text-white font-mono">FakeStore</a>
                        </div>
                    </div>
                    <div className=" flex  items-center gap-2">
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none">
                            <span><a href="/">Home</a></span>
                        </button>
                        <div className=" flex items-center pr-2 ">
                            <button type="button" className="relative rounded-full  bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none">
                                <span><a href="/cart">Cart</a></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
