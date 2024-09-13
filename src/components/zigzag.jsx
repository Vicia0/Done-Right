
export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-red-600 bg-red-100 rounded-full mb-4">
            Empowering Women, Together            </div>
            <h1 className="h2 mb-4">One App, Boundless Support</h1>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={"/fille.jpg"}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-red-600 mb-2">
                  Gender-Based Violence in Burundi
                  </div>
                  <h3 className="h3 mb-3">What about it?</h3>
                  <p className="text-xl text-gray-400 mb-4">
                  Gender-based violence is a significant issue in Burundi, with over 10,000 reported cases of rape and thousands of domestic violence incidents in the past three years. Young girls face high rates of sexual harassment, compounded by limited access to support systems and resources. The lack of timely help, coupled with the stigma and fear of reporting, leaves many victims vulnerable and traumatized, posing severe threats to their safety and well-being.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={"/consult.png"}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-red-600 mb-2">
                    Proposed solution
                  </div>
                  <h3 className="h3 mb-3">By Burundian Women, For Burundian Women</h3>
                  <p className="text-xl text-gray-400 mb-4">
                  To address the pervasive issue of gender-based violence, StrongSister provides accessible and effective tools tailored to the specific needs of Burundian women. Our app empowers women with emergency calling, incident reporting, incident recording, safe contacts, and comprehensive resources. By leveraging these solutions, women can enhance their safety, seek timely help, and protect their well-being and dignity.
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={"/goal.png"}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-red-600 mb-2">
                    Way Forward
                  </div>
                  <h3 className="h3 mb-3">Our Goal</h3>
                  <p className="text-xl text-gray-400 mb-4">
                  Provide tailored support frameworks that address the specific needs and challenges faced by Burundian women. Our strategies ensure cost-effectiveness without compromising on safety and support. Guaranteeing the accessibility and availability of our services, StrongSister aims to empower women, ensuring they have the tools and resources needed to protect themselves and seek help when needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
