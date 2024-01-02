export default function Login() {
  return (
    <>
      <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-title-md2 font-bold text-black dark:text-white">
              Sign In
            </h2>

            <nav>
              <ol className="flex items-center gap-2">
                <li><a className="font-medium" href="index.html">Dashboard /</a></li>
                <li className="font-medium text-primary">Sign In</li>
              </ol>
            </nav>
          </div>
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex flex-wrap items-center">
              <div className="hidden w-full xl:block xl:w-1/2">
                <div className="py-17.5 px-26 text-center">
                  <a className="mb-5.5 inline-block" href="index.html">
                    <img className="hidden dark:block" src="./images/logo/logo.svg" alt="Logo" />
                    <img className="dark:hidden" src="./images/logo/logo-dark.svg" alt="Logo" />
                  </a>

                  <p className="font-medium 2xl:px-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    suspendisse.
                  </p>

                  <span className="mt-15 inline-block">
                  
                  </span>
                </div>
              </div>
              <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
                <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                  <span className="mb-1.5 block font-medium">Start for free</span>
                  <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                    Sign In to TailAdmin
                  </h2>

                  <form>
                    <div className="mb-4">
                      <label className="mb-2.5 block font-medium text-black dark:text-white">Email</label>
                      <div className="relative">
                        <input type="email" placeholder="Enter your email"
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />

                        <span className="absolute right-4 top-4">
                     
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="mb-2.5 block font-medium text-black dark:text-white">Re-type Password</label>
                      <div className="relative">
                        <input type="password" placeholder="6+ Characters, 1 Capital letter"
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />

                        <span className="absolute right-4 top-4">
                
                        </span>
                      </div>
                    </div>

                    <div className="mb-5">
                      <input type="submit" value="Sign In"
                        className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90" />
                    </div>

                    <button
                      className="flex w-full items-center justify-center gap-3.5 font-medium rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-70 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-70">
                      <span>
                     
                      </span>
                      Sign in with Google
                    </button>

                    <div className="mt-6 text-center">
                      <p className="font-medium">
                        Don’t have any account?
                        <a href="signup.html" className="text-primary">Sign Up</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
