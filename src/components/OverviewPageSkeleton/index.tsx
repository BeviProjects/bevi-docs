import { Skeleton } from "@component/Skeleton";
import { Container } from "@component/Container";
import { ButtonShow } from "@component/ButtonShow";

export const OverviewPageSkeleton = ({ count = 12 }: { count?: number }) => (
  <section className="pb-5xl">
    <Container size="full">
      <div className="space-y-md">
        {/* Simula 3 grupos de letras */}
        {Array.from({ length: 3 }).map((_, groupIndex) => (
          <div key={groupIndex}>
            <Skeleton size="size-5xl" /> {/* Placeholder da letra */}
            <div className="grid grid-cols-4 gap-md mt-2xs">
              {Array.from({ length: count / 3 }).map((_, i) => (
                <ButtonShow>
                  <Skeleton key={i} size="size-5xl" />
                </ButtonShow>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
