"use client";
import { Container } from "@component/Container";
import { OverviewPageTemplate } from "@component/OverviewPageTemplate";
import { BvIcon, type BvIconRegistry } from "bevi-icon";

const BeviIcon = () => {
  const handleClick = (selected: BvIconRegistry) => {
    console.log(`Click: `, selected);
  };

  return (
    <>
      <section>
        <Container>
          <h1 className="text-2xl font-bold text-violet-20">Overview</h1>
        </Container>
      </section>
      <OverviewPageTemplate<BvIconRegistry>
        onItemClick={handleClick}
        renderItem={(logo) => (
          <div className="px-2xl py-md">
            <BvIcon name={logo.displayName} width={64} className="text-violet-20" />
          </div>
        )}
      />
    </>
  );
};

export default BeviIcon;
