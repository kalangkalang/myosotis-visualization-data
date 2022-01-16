import { ChipIcon, HomeIcon, SupportIcon, TrendingUpIcon } from "@heroicons/react/outline";


function Sidebar() {

    return (
        <div className="text-gray-300 overflow-y-scroll scrollbar-hide border-r p-5 pt-8 border-gray-900 h-screen text-xs lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex">
            <div className="space-y-3">
                <button className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className="h-4 w-4" />
                    <p>Home</p>
                </button>

                <button className="flex items-center space-x-2 hover:text-white">
                    <TrendingUpIcon className="h-4 w-4"/>
                    <p>Monitor-System</p>
                </button>

                <button className="flex items-center space-x-2 hover:text-white">
                    <ChipIcon className="h-4 w-4" />
                    <p>Status-System</p>
                </button>

                <button className="flex items-center space-x-2 hover:text-white">
                    <SupportIcon className="h-4 w-4" />
                    <p>Support</p>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;