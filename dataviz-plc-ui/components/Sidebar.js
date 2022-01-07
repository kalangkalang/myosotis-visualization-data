import { ChipIcon, HomeIcon, SupportIcon, TrendingUpIcon } from "@heroicons/react/outline";


function Sidebar() {

    return (
        <div className="text-gray-300 overflow-y-scroll scrollbar-hide border-r p-5 border-gray-900 h-screen text-xs lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex">
            <div className="space-y-4">
                <button className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className="h-5 w-5" />
                    <p>Home</p>
                </button>

                <button className="flex items-center space-x-2 hover:text-white">
                    <TrendingUpIcon className="h-5 w-5"/>
                    <p>Monitor-System</p>
                </button>

                <button className="flex items-center space-x-2 hover:text-white">
                    <ChipIcon className="h-5 w-5" />
                    <p>Status-System</p>
                </button>

                <button className="flex items-center space-x-2 hover:text-white">
                    <SupportIcon className="h-5 w-5" />
                    <p>Support</p>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;