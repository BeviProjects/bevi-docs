import { Container } from "@component/Container";
import { Homepage, type NavigationType } from "@config/navigation";
import { BvIcon } from "bevi-icon";

const Home = () => {
  return (
    <main className="min-h-screen flex-center flex-col relative">
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
      <section className="absolute bottom-0 left-0">
        <Container>
          <div className="flex flex-row justify-start items-center gap-2xs p-2xs bg-yellow-90 inset-ring-1 inset-ring-yellow-80 rounded-md mb-xs">
            <BvIcon name="error" className="text-yellow-20" />
            <p className="font-semibold text-yellow-20">
              Esse ambiente se encontra em desenvolvimento, então erros são
              esperados, e serão corrigidos ao longo do tempo.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
