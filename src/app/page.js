import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      {/* ===== Preloader Start ===== */}
      {/* Include your preloader component here */}
      {/* ===== Preloader End ===== */}

      {/* ===== Page Wrapper Start ===== */}
      <div className="flex h-screen overflow-hidden">
        {/* ===== Sidebar Start ===== */}
		  <Navbar />
        {/* ===== Sidebar End ===== */}
			
        {/* ===== Content Area Start ===== */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* ===== Header Start ===== */}
            <Header />
          {/* ===== Header End ===== */}

          {/* ===== Main Content Start ===== */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                {/* Card Items */}
                {/* Include your card components here */}
              </div>

              <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                {/* Charts, Maps, and Tables */}
                {/* Include your chart, map, and table components here */}
              </div>
            </div>
          </main>
          {/* ===== Main Content End ===== */}
		   <div className="mt-auto">
		     <Footer />
		   </div>
        </div>
        {/* ===== Content Area End ===== */}
      </div>
      {/* ===== Page Wrapper End ===== */}
    </>
  );
}
