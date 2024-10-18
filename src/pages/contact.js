import React from "react";
import Layout from "../components/layout";
import Fade from "react-reveal/Fade";
import Seo from "../components/seo";

import image from "../images/side-panel-min.jpg";

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Sithranjan Saranath General Trading L.L.C"
        description="At Sithranjan Saranath General Trading L.L.C, we specialize in exporting fresh, high-quality fruits and vegetables from Sri Lanka to the United Arab Emirates. Our mission is to deliver the rich flavors of Sri Lankan produce to the Middle East, ensuring freshness and satisfaction for all our clients."
      />

      <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
        <div className="bg-pink opacity-70 p-10 rounded-xl w-full m-5">
          <h1 className="text-3xl text-white">CONTACT US</h1>
          <p className="text-lg mt-2 opacity-70 xxs:text-xs sm:text-sm">
            For inquiries, please contact us at
          </p>

          <div className="w-full mt-10">
            <div className="flex flex-wrap">
              {/* Phone Number 1 */}
              <div className="mb-12 w-full md:w-6/12 px-3">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block p-4 text-teal-700">
                      {/* Phone Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-8 w-8"
                      >
                        <path d="M3 2c-1.094 0-2 .906-2 2 0 9.944 8.056 18 18 18 1.094 0 2-.906 2-2v-4.17c0-.918-.626-1.71-1.515-1.945l-5.088-1.272c-.827-.206-1.689.085-2.19.732l-2.292 2.938a16.001 16.001 0 01-6.59-6.59l2.938-2.292c.647-.5.938-1.363.732-2.19L7.115 4.515C6.88 3.626 6.088 3 5.17 3H3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="mb-2 font-bold underline decoration-pink">
                      Phone 1
                    </p>
                    <p className="text-neutral-200 mb-2">        
                      <a href="tel+971526950454">+971 52 695 0454</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Phone Number 2 */}
              <div className="mb-12 w-full md:w-6/12 px-3">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block p-4 text-teal-700">
                      {/* Phone Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-8 w-8"
                      >
                        <path d="M3 2c-1.094 0-2 .906-2 2 0 9.944 8.056 18 18 18 1.094 0 2-.906 2-2v-4.17c0-.918-.626-1.71-1.515-1.945l-5.088-1.272c-.827-.206-1.689.085-2.19.732l-2.292 2.938a16.001 16.001 0 01-6.59-6.59l2.938-2.292c.647-.5.938-1.363.732-2.19L7.115 4.515C6.88 3.626 6.088 3 5.17 3H3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="mb-2 font-bold underline decoration-pink">
                      Phone 2
                    </p>
                    <p className="text-neutral-200 mb-2">
                      <a href="tel:+971581891600">+971 58 189 1600</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Phone Number 2 */}
              <div className="mb-12 w-full md:w-6/12 px-3">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block p-4 text-teal-700">
                      {/* Phone Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-8 w-8"
                      >
                        <path d="M3 2c-1.094 0-2 .906-2 2 0 9.944 8.056 18 18 18 1.094 0 2-.906 2-2v-4.17c0-.918-.626-1.71-1.515-1.945l-5.088-1.272c-.827-.206-1.689.085-2.19.732l-2.292 2.938a16.001 16.001 0 01-6.59-6.59l2.938-2.292c.647-.5.938-1.363.732-2.19L7.115 4.515C6.88 3.626 6.088 3 5.17 3H3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="mb-2 font-bold underline decoration-pink">
                      Land Phone
                    </p>
                    <p className="text-neutral-200 mb-2">
                      <a href="tel:+045849244">+04 58 49244</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Email 1 */}
              <div className="mb-12 w-full md:w-6/12 px-3">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block p-4 text-teal-700">
                      {/* Email Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-8 w-8"
                      >
                        <path d="M12 13.293l8.293-8.293h-16.586l8.293 8.293zM12 15l-9-9v12h18v-12l-9 9z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="mb-2 font-bold underline decoration-pink">
                      Email
                    </p>
                    <p className="text-neutral-200 mb-2">
                      <a href="info@aspexport.ae">info@aspexport.ae</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Email 2 */}
              <div className="mb-12 w-full md:w-6/12 px-3">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block p-4 text-teal-700">
                      {/* Email Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-8 w-8"
                      >
                        <path d="M12 13.293l8.293-8.293h-16.586l8.293 8.293zM12 15l-9-9v12h18v-12l-9 9z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="mb-2 font-bold underline decoration-pink">
                      Sales Manager Email
                    </p>
                    <p className="text-neutral-200 mb-2">
                      <a href="mailto:ss@aspexport.ae">ss@aspexport.ae</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Location */}
              <div className="mb-12 w-full md:w-6/12 px-3">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block p-4 text-teal-700">
                      {/* Location Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-8 w-8"
                      >
                        <path d="M12 2c-3.866 0-7 3.134-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zM12 11c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="mb-2 font-bold underline decoration-pink">
                      Location
                    </p>
                    <p className="text-neutral-200 mb-2">
                    Gulf Towers, Um Hurair second, 9th floor, 903A-33
                    United Arab Emirates, Dubai.
                    </p>
                  </div>
                </div>
              </div>
              {/* PO Box Number */}
              <div className="mb-12 w-full md:w-6/12 px-3">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block p-4 text-teal-700">
                      {/* PO Box Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-8 w-8"
                      >
                        <path d="M20 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2zm0 2v1l-8 4.5-8-4.5v-1h16zm-16 12v-9.191l7.447 4.193c.27.152.584.152.854 0l7.447-4.193v9.191h-16z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="mb-2 font-bold underline decoration-pink">
                      PO Box
                    </p>
                    <p className="text-neutral-200 mb-2">PO Box 455941</p>
                  </div>
                </div>
              </div>
              {/* Opening Hours */}
              <div className="mb-12 w-full md:w-6/12 px-3">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block p-4 text-teal-700">
                      {/* Clock Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-8 w-8"
                      >
                        <path d="M12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm1 10h-4v-5h2v3h2v2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="mb-2 font-bold underline decoration-pink">
                      Opening Hours
                    </p>
                    <p className="text-neutral-200 mb-2">
                      Monday - Saturday: 9AM - 12AM & 4PM - 8PM 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Fade bottom cascade>
          <div className="w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block">
            <img
              className="object-cover h-full w-full"
              src={image}
              alt="Contact Us"
            />
          </div>
        </Fade>
      </div>
    </Layout>
  );
};

export default Contact;