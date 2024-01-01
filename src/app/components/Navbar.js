
'use client';
import { useState } from 'react';

const Sidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <aside
      className={`${
        sidebarToggle ? 'translate-x-0' : '-translate-x-full'
      } sidebar absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0`}
      onClick={() => setSidebarToggle(false)}
    >
      <div className="sidebarHeader flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <a href="index.html">
          <img src="./images/logo/logo.svg" alt="Logo" />
        </a>

        <button
          className="block lg:hidden"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        >
          {/* ... (SVG icon) */}
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <div>
              <ul className="mb-6 flex flex-col gap-1.5">
                <li className="menuItem">Test</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
