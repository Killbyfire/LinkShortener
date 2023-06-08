import NavBar from "@/components/navBar";
import Image from "next/image";

export default function LoginPage() {
  return (
    <>  
      <NavBar />
      <div className="flex justify-center align-middle mt-30">
        <form className="flex flex-col gap-4 mt-10">
            <h1 className="text-2xl font-bold">Login</h1>
          <input className="border-2 border-black rounded-md w-[25%] min-w-[200px] max-w-[300px]" type="email" />
          <input className="border-2 border-black rounded-md w-[25%] min-w-[200px] max-w-[300px]" type="password" />
          <button className="bg-black text-white rounded-md w-[25%] min-w-[200px] max-w-[300px] h-10">Login</button>
        </form>
      </div>
    </>
  );
}
