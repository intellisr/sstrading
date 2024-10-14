import React from "react";
import Fade from "react-reveal/Fade";

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-8">
      <Fade bottom>
        <h2 className="text-4xl font-bold stylish-font text-black">OUR VALUES</h2>
        <h3 className="text-3xl font-semibold stylish-font text-black mt-4">Competitive Points</h3>
      </Fade>

      <div className="mt-8 space-y-12">
        <Fade bottom cascade>
          <div className="space-y-8">
            <section>
              <h4 className="text-2xl font-semibold stylish-font text-black">Exclusive Products</h4>
              <p className="text-base text-black opacity-90 mt-3">
                SSGTLLC is the exclusive distributor of all the products in our collections. Become our exclusive client and you alone will have the right to sell one or many of our products in your market.
              </p>
            </section>

            <section>
              <h4 className="text-2xl font-semibold stylish-font text-black">Marketing Support</h4>
              <p className="text-base text-black opacity-90 mt-3">
                Every month, SSGTLLC allocates 125 working hours to run online and offline marketing, which has already resulted in thousands of USD in revenue for our clients. When you become a distributor of one of our products, we will advertise your company as our representative and redirect all customers that show interest in our products to you.
              </p>
            </section>

            <section>
              <h4 className="text-2xl font-semibold stylish-font text-black">Direct Connection with the Factory</h4>
              <p className="text-base text-black opacity-90 mt-3">
                We work directly as part of the factory to ensure our customers the highest profit margin. This also means that working with us means working with the factory itself.
              </p>
            </section>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default WorkPage;