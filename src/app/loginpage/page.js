import Image from "next/image";
export default function Login() {
  return (
    <div className="flex">
      <div className="w-1/2 bg-[#F4F6F9] flex flex-col justify-center content-center">
        <div className="px-20 content-center">
          <div className="px-40 mx-12">
            <img src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png" width="150"></img>
          </div>
          <div className="container h-[21rem] w-[25rem] border rounded border-gray-300 bg-white mx-24 mt-10">
            <div className="p-8">
              <div>
                <p className="text-gray-500 text-xs pb-1">User Name</p>
              </div>
              <div className="border border-black-800 rounded-md h-9  hover:border-blue-700">
                <input
                  type="text"
                  className="w-full h-full bg-transparent border-none outline-none text-black pl-1"
                ></input>
              </div>
              <div>
                <p className="text-gray-500 text-xs pb-1 pt-4">Password</p>
              </div>
              <div className="border border-black-800 rounded-md h-9  hover:border-blue-700">
                <input
                  type="password"
                  className="w-full h-full bg-transparent border-none outline-none text-black pl-1"
                ></input>
              </div>
              <div className="pt-4">
                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white text-sm font-normal py-2 my-3 px-4 rounded"
                  type="submit">
                  Login
                </button>
              </div>
              <div className="flex items-center pt-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
                  />
                  <label className="ml-2 text-xs text-gray-600">Remember me</label>
                </div>
                <hr className="my-4" />
              <div className="text-xs text-gray-600 hover:text-blue-700 cursor-pointer">Forgot password?</div>
            </div>
          </div>
          <div className="text-blue-700 text-center my-5 text-xs hover:text-blue-900 cursor-pointer	">Dont have an account?</div>
          <div></div>
        </div>
      </div>
      <div className="w-1/2">
        <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
          <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" />
        </div>
      </div>
    </div>
  );
}
