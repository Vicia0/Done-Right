
export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-blue-600 bg-blue-100 rounded-full mb-4">
            Done Right fabricators ltd            </div>
            <h1 className="h2 mb-4">One Business, Endless Possibilities</h1>
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
                  src={"/H.png"}
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
                  <div className="font-architects-daughter text-xl text-blue-600 mb-2">
                    H paving stones
                  </div>
                  <h3 className="h3 mb-3">What about it?</h3>
                  <p className="text-xl text-gray-400 mb-4">
                   Discover our durable, high-quality interlocking paving stones, designed to provide a strong foundation for any outdoor space. Perfect for driveways, walkways, and patios, these cement-based pavers are built to last and add a unique aesthetic to your landscaping projects.                  </p>
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
                  src={"/round.png"}
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
                  <div className="font-architects-daughter text-xl text-blue-600 mb-2">
                   Round paving stones
                  </div>
                  <h3 className="h3 mb-3">What about it?</h3>
                  <p className="text-xl text-gray-400 mb-4">
                  Our hexagonal paving stones offer a modern, stylish solution for your outdoor projects. Available in a mix of neutral and vibrant colors, these durable cement-based pavers are perfect for creating eye-catching patterns that enhance the visual appeal of any space                  </p>
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
