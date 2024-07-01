"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    router.push("/registration");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8000/users", {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex">
      <div className="w-1/2 bg-[#F4F6F9] flex flex-col justify-center content-center">
        <div className="px-20 content-center">
          <div className="px-40 mx-12">
            <img
              src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png"
              width="150"
            ></img>
          </div>
          <div className="container h-[21rem] w-[25rem] border rounded border-gray-300 bg-white mx-24 mt-10">
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="text-gray-500 text-xs pb-1">
                  <label>User Name</label>
                </div>
                <div className="border border-black-800 rounded-md h-9  hover:border-blue-700">
                  <input
                    type="text"
                    className="w-full h-full bg-transparent border-none outline-none text-black pl-1"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </div>
                <div className="text-gray-500 text-xs pb-1 pt-4">
                  <label>Password</label>
                </div>
                <div className="border border-black-800 rounded-md h-9  hover:border-blue-700">
                  <input
                    type="password"
                    className="w-full h-full bg-transparent border-none outline-none text-black pl-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <div className="pt-4">
                  <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white text-sm font-normal py-2 my-3 px-4 rounded"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="flex items-center pt-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
                  />
                  <label className="ml-2 text-xs text-gray-600">
                    Remember me
                  </label>
                </div>
                <hr className="my-4" />
                <div className="text-xs text-gray-600 hover:text-blue-700 cursor-pointer">
                  Forgot password?
                </div>
              </form>
            </div>
          </div>
          <div className="text-blue-700 text-center my-5 text-xs hover:text-blue-900 cursor-pointer	">
            <button onClick={handleRegister}>Dont have an account?</button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
          <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" />
        </div>
      </div>
    </div>
  );
}
