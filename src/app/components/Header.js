'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser , faSun , faSortDown , faCog, faAddressBook, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'; // Import additional icons as needed

const Header = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              {/* Hamburger lines go here */}
            </span>
          </button>
        </div>
	   <div className="hidden sm:block">
       </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <li>
             <label className={`relative m-0 block h-7.5 w-14 h-8 rounded-full ${darkMode ? 'bg-black' : 'bg-gray-200'}`}>
                <input
                  type="checkbox"
                  value={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
                />
                <span className={`absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-black shadow-switcher duration-75 ease-linear ${darkMode && '!right-[3px] !translate-x-full'}`}>
                  <FontAwesomeIcon icon={faSun} />
                </span>
              </label>
            </li>
          </ul>
          <div className="relative" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <a className="flex items-center gap-4" href="#" onClick={(e) => e.preventDefault()}>
              {/* User details go here */}
			  <span className="hidden text-right lg:block">
				<span className="block text-sm font-medium text-black dark:text-white">Thomas Anree</span>
				<span className="block text-xs font-medium">UX Designer</span>
			  </span>
			  <span className="h-12 w-12 rounded-full">
				 <FontAwesomeIcon icon={faUser} /> {/* Use FontAwesome icon for user details */}
			  </span>
            
			<FontAwesomeIcon icon={faSortDown} /></a>
            {dropdownOpen && (
              <div className="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                {/* Dropdown items go here */}
				<ul class="flex flex-col gap-5 bg-white border-b border-stroke px-6 py-7.5 dark:border-strokedark">
					<li>
					  <a href="profile.html" class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
						<FontAwesomeIcon icon={faUser} />
						My Profile
					  </a>
					</li>
					<li>
					  <a href="#" class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
					    <FontAwesomeIcon icon={faAddressBook} />
						My Contacts
					  </a>
					</li>
					<li>
					  <a href="settings.html" class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
						<FontAwesomeIcon icon={faCog} />
						Account Settings
					  </a>
					</li>
				  </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
