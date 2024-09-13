export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Testimonials</h2>
            <p className="text-xl text-gray-400">
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-red-100"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={"/testimonial-01.jpg"}
                    width={48}
                    height={48}
                    alt="Testimonial 01"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-red-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-red-600 grow">
              Engaging with StrongSister has been a game-changer for my personal safety and peace of mind. Their innovative app features like emergency calling and incident reporting have provided me with a sense of security I never had before. The comprehensive resources and support network available through StrongSister have empowered me to stand up for myself and seek help when needed. I highly recommend StrongSister to any woman looking for a reliable and supportive safety tool.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-red-600 not-italic">Kwizera Audrey</cite>{" "}
                -{" "}
                <a
                  className="text-red-400 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Student
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-red-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={""}
                    width={48}
                    height={48}
                    alt="Testimonial 02"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-red-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-red-600 grow">
              Using StrongSister has transformed how I handle challenging situations. The ability to quickly record incidents and notify my safe contacts has made a significant difference in my daily life. The app's user-friendly interface and access to essential resources have made me feel more confident and protected. StrongSister's commitment to user privacy and security is truly commendable. I urge every woman to download StrongSister and take control of their safety and well-being.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-red-600 not-italic">Iris Iteriteka</cite>{" "}
                -{" "}
                <a
                  className="text-red-400 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Sales agent
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            {/* <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={"/testimonial-03.jpg"}
                    width={48}
                    height={48}
                    alt="Testimonial 03"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
              Since working with Haven, we've witnessed incredible outcomes. 
              Their all-inclusive cybersecurity solutions improved our ability to withstand 
              intrusions and allowed us to more effectively simplify our security procedures. 
              I wholeheartedly recommend Haven to any company looking for the best cybersecurity knowledge available.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Sam Badu</cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Entrepreneur
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
