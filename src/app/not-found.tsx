import Link from "next/link";
import { Container } from "@component/Container";

const NotFound = () => {
	return (
    <main>
      <section className="py-8xl">
        <Container size="sm">
     			<h1 className="text-2xl text-violet-20 mb-md">Page not found</h1>
     			<Link href="/" className="underline font-semibold">Return Home</Link>
        </Container>
      </section>
		</main>
	);
};

export default NotFound;
