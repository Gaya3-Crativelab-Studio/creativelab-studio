import ServiceCard from "../components/ServiceCard";
import servicesData from "../data/servicesData";
import PageHero from "../components/shared/PageHero";
import Process from "../components/shared/Process";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/shared/WhyChooseUs";

const Services = () => {
  return (
    <>
      {/* Page Hero */}
      <PageHero />

      {/* Service Section */}
      <section id="services" className="bg-white py-24 overflow-hidden">
        <div className="max-w-350 mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="font-[Nexa] uppercase tracking-[4px] text-[#6F00FF] text-sm mb-5">
              WHAT WE CREATE
            </p>

            <h2 className="font-[Founders] text-[#111111] leading-[0.95] text-4xl sm:text-6xl lg:text-7xl max-w-337.5 mx-auto">
              We create immersive
              <br />
              visual experiences
              <span className="text-[#6F00FF]"> ✱ </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                items={service.items}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Process */}
      <Process />
      {/* Why Choose Us */}
      <WhyChooseUs />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Services;
