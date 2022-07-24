import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });
  return (
    <div className="Error_container">
      <h1>Oops...</h1>
      <h2>This URL doesn't exist</h2>
      <Link href="/">
        <a>Go back to Home page</a>
      </Link>
    </div>
  );
};

export default ErrorPage;
