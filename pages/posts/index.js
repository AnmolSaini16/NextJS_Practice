import Link from "next/link";
import React from "react";
import styles from "../../styles/Posts.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const index = ({ posts }) => {
  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((item) => (
        <Link href={`/posts/${item.id}`} key={item.id}>
          <a className={styles.single}>
            <h3>{item.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default index;
