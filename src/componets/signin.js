const SignIn = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-center text-2xl mb-4">Sign in to Hb Space Tl</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center mb-4">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.35 11.1H20.5V11H12V13.5H17.6C16.95 15.4 15.13 16.5 13 16.5C10.24 16.5 8 14.26 8 11.5C8 8.74 10.24 6.5 13 6.5C14.5 6.5 15.83 7.14 16.71 8.15L19 5.87C17.68 4.41 15.45 3.5 13 3.5C8.58 3.5 5 7.08 5 11.5C5 15.92 8.58 19.5 13 19.5C17.41 19.5 21 15.92 21 11.5C21 11.34 21.35 11.1 21.35 11.1Z" />
              </svg>
              Sign in with Google
            </button>
            <p className="text-center mb-4">or sign in with your email address</p>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Remember me</span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default SignIn;
  