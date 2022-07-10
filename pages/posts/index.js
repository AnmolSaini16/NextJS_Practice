import Link from "next/link";
import React from "react";
import Navbar from "../../components/navbar";

const index = () => {
  return (
    <div>
      <h2>All Posts</h2>
      <Link href="/posts/FirstPost">
        <a>Check out the first post!</a>
      </Link>
    </div>
  );
};

export default index;
