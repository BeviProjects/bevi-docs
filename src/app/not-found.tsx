import Link from "next/link";

const NotFound = () => {
	return (
		<main>
			<h1>Page not found</h1>
			<Link href="/">Return Home</Link>
		</main>
	);
};

export default NotFound;
