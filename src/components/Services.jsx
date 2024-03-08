import { service1 } from "../assets";
import Heading from "./Heading";
import Section from "./Section";

const Services = () => {
  return (
    <Section id="#how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />
        <div className="relative">
          <div className="relative z-1 mb-5 flex h-[39rem] items-center overflow-hidden rounded-3xl border border-n-1/10 p-8 lg:p-20 xl:h-[46rem]">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full md:w-3/5 xl:w-auto">
              <img
                src={service1}
                alt="Smartest AI"
                className="h-full w-full object-cover md:object-right"
                width={800}
                height={730}
              />
            </div>
            
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
