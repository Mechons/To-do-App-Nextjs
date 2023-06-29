import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link href="/">All </Link>
        <Link href="/?todos=active">Active </Link>
        <Link href="/?todos=completed">Completed </Link>
      </nav>
    </div>
  );
};

export default Navbar;
