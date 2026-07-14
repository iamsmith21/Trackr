import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center select-none no-underline cursor-pointer">
      {/* Geometric Sora Wordmark */}
      <span className="font-display font-black text-xl tracking-tight text-slate-900 dark:text-white">
        Track<span className="text-[#2F5C3B] dark:text-[#81C784]">r.</span>
      </span>
    </Link>
  );
}

