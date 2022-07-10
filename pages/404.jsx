import Link from "next/link";

const ErrorPage = () => {
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
