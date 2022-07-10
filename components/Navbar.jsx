import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1 className="logo">Blogs</h1>
      </div>
      <div>
        <Link href="/">
          <a>Homepage</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts page</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
