import React from "react";

export const Blog = () => {
    return (
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white ">
              Our Blog
            </h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Visit the StrongSister blog to read empowering stories, expert advice, and practical tips on ensuring your safety and supporting each other in the fight against gender-based violence.
            </p>
          </div>
          <div class="grid gap-8 lg:grid-cols-2">
            <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    class="mr-1 w-3 h-3"
                    fill="red"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Article
                </span>
                <span class="text-sm">10 days ago</span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">BMC Women's Health</a>
              </h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              Sexual assault is a prevalent crime against women globally with known negative effects on health. Recent media reports in Canada indicate that many sexual assault reports are not believed by police. Negative reporting experiences of sexual assault have been associated with secondary victimization and trauma among survivors.
              </p>
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                  <img
                    class="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos avatar"
                  />
                  <span class="font-medium dark:text-white">
                    BMC 
                  </span>
                </div>
                <a
                  href="https://bmcwomenshealth.biomedcentral.com/articles/10.1186/s12905-021-01358-6"
                  class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  target="_blank">
                  Read more
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
            <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    class="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Article
                </span>
                <span class="text-sm">12 days ago</span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">
                Rape-the hidden human rights abuse
                </a>
              </h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              Like all human rights abuses in Burundi, rape has become an entrenched feature of the crisis
              because the perpetrators – whether government soldiers, members of armed political groups,
              or private individuals - have largely not been brought to justice. Not one of the women whose
              cases are detailed in this report has been able to successfully pursue a criminal prosecution for
              rape. Rape has, however, also been exacerbated by widespread discrimination against women
              and its consequences have been aggravated by poverty, internal displacement and a failing
              health system.

              </p>
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                  <img
                    class="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Green avatar"
                  />
                  <span class="font-medium dark:text-white">
                   Amnesty International
                  </span>
                </div>
                <a
                  href="https://www.amnesty.org/en/wp-content/uploads/2021/08/afr160062004en.pdf"
                  class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  target="_blank">
                  Read more
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              ``
            </article>
          </div>
          <div class="grid gap-8 lg:grid-cols-2">
            <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    class="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Article
                </span>
                <span class="text-sm">15 days ago</span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Sexual violence against women and girls in Burundi</a>
              </h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              The World Health Organization indicate that 35% of women worldwide have experienced partner or non-partner violence in some part of their lives, but in war-torn zones in some sub-Saharan African countries like Burundi, sexual violence was a part of the everyday lives of most women and girls during the periods of series of conflicts the country experienced. Sexual violence was used as a weapon of war by combatants during the conflict periods. However, even in the post-conflict era, the rate of various forms of sexual violence is still on a rise. This paper reviews the situation of sexual violence during and after the Burundi conflict, influencing factors and the way forward.
              </p>
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                  <img
                    class="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos avatar"
                  />
                  <span class="font-medium dark:text-white">Helena Yeboah</span>
                </div>
                <a
                  href="https://www.researchgate.net/publication/315793464_SEXUAL_VIOLENCE_AGAINST_WOMEN_AND_GIRLS_IN_BURUNDI"
                  class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  target="_blank">
                  Read more
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
            <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    class="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Article
                </span>
                <span class="text-sm">18 day ago</span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Burundi: information for victims of rape and sexual assault</a>
              </h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              If you’ve been sexually assaulted it’s important to remember that it was not your fault. Rape and Sexual assault is always wrong – no matter who commits it or where it happens. It is traumatic and it can affect you both physically and emotionally. Do not be afraid to get help.
              </p>
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                  <img
                    class="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Green avatar"
                  />
                  <span class="font-medium dark:text-white">
                  Foreign, Commonwealth & Development Office
                  </span>
                </div>
                <a
                  href="https://www.gov.uk/government/publications/burundi-information-for-victims-of-rape-and-sexual-assault/burundi-information-for-victims-of-rape-and-sexual-assault"
                  class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  target="_blank">
                  Read more
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
          </div>
          <div class="grid gap-8 lg:grid-cols-2">
            <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    class="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Article
                </span>
                <span class="text-sm"> 20day ago</span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Violence Prevention Initiative </a>
              </h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              The Violence Prevention Initiative of the Government of Newfoundland and Labrador reflects government’s commitment to addressing the problem of violence in this province. The Initiative is a multi-departmental, government – community partnership to find long term solutions to the problem of violence against those most at risk in our society – women, children, youth, older persons, persons with disabilities, Indigenous women and children and other people who are vulnerable to violence because of their ethnicity, sexual orientation or economic status. The Violence Prevention Initiative is coordinated by the Office for the Status of Women.
              </p>
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                  <img
                    class="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Green avatar"
                  />
                  <span class="font-medium dark:text-white">New Foundland & Labrador</span>
                </div>
                <a
                  href="https://www.gov.nl.ca/vpi/tips-and-tools/tips-for-youth-to-prevent-gender-based-violence-and-inequality/"
                  class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  target="_blank">
                  Read more
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
}