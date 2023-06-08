export default function NavBar() {
  return (
    <>
      <div className="flex flex-row justify-evenly w-screen h-12 bg-gray-500 p-2 pl-[10%] pr-[10%]">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </>
  );
}
