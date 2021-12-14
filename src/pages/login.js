export default function Login() {
  return (
    <>
      <div className="container flex items-center justify-center h-screen">
        <div className="absolute w-2/4 h-64 transition transform shadow-xl rounded-3xl -skew-y-1 sm:-rotate-3 bg-gradient-to-tr from-teal-600 to-007A78 " />
        <div className="z-10 w-2/4 h-auto bg-white shadow-xl rounded-3xl">
          <div className="p-10 text-gray-700">
            <h1 className="flex justify-center mb-2 text-lg font-medium">
              Login Qtemu
            </h1>
            <div class="flex justify-start py-1">
              <div className="w-4/12">
                <label
                  htmlFor="title"
                  class="text-xl font-semibold px-1 text-left"
                >
                  Username
                </label>
              </div>
              <div class="flex w-8/12">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  class="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-007A78"
                  placeholder="Username"
                  id="username"
                  required
                  name="username"
                />
              </div>
            </div>
            <div class=" flex justify-around py-1">
              <div className="w-4/12">
                <label htmlFor="title" class="text-xl font-semibold px-1">
                  Date
                </label>
              </div>
              <div class="flex w-8/12">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="password"
                  class="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-007A78"
                  placeholder="Password"
                  id="password"
                  required
                  name="password"
                />
              </div>
            </div>
            <button className="w-32 h-10 font-semibold text-white transition duration-300 ease-in-out delay-150 transform border hover:-translate-y-1 hover:shadow-xl bg-007A78 rounded-xl hover:bg-white hover:border-007A78 hover:text-007A78 ">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
