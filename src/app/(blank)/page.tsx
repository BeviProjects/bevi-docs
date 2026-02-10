import { Container } from "@component/Container";
import { routes } from "@config/routes";
import { BvIcon } from "bevi-icon";
import { Homepage, type NavigationType } from "@config/navigation";

const Home = () => {
  return (
    <main className="min-h-screen flex-center flex-col ">
      <section>
        <Container>
          <div className="flex flex-row items-center justify-start gap-2xs">
            <BvIcon name="book" variant="duo" />
            <h1 className="text-2xl font-bold text-violet-20">Hello World</h1>
          </div>
          <p className="text-lg text-gray-35">
            Todas as bibliotecas criadas para projetos Bevi
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <ul className="flex flex-row gap-xs">
            {Homepage.map((item: NavigationType) => (
              <li key={item.id}>
                <a href={item.href} className="underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
};

export default Home;
