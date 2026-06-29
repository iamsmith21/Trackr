export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200  ">
      <h1 className="text-lg font-medium"> Trackr</h1>
      <button className="bg-blue-500 text-sm px-4 py-2 border border-gray-300 rounded-lg transition-all duration-500 hover:bg-red-500 hover:scale-105">
        Logout
      </button>
    </nav>
  );
}
