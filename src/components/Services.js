import React from "react";
import { MdOutlineAnalytics, MdFingerprint, MdGroups } from "react-icons/md";
import { BsChatSquare } from "react-icons/bs";
const Services = () => {
  return (
    <section id="services" className="py-28 flex justify-center w-full ">
      <div className="max-w-xl lg:max-w-none pad-nav mx-7">
        <h2 className="text-5xl text-main-color mb-10">What We Do</h2>
        <p className="text-desc-color leading-8 text-[19.2px] mb-14">
          This is Infinite Loop, free Bootstrap 4.0 HTML template with a
          parallax effect. This layout is what you can modify and use for your
          websites. Please spread a word to your friends about our website.
          Thank you for supporting us. If you have any question, you can contact
          us or chat with us on our{" "}
          <span className="text-alt-color cursor-pointer hover:opacity-80">
            Tooplate Facebook page.
          </span>
        </p>

        <div className="text-main-colorbg-red-200 mt-10 text-main-color grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-10">
          <article className="flex flex-col md:flex-row items-start gap-8">
            <div>
              <MdOutlineAnalytics className="text-6xl" />
            </div>

            <div>
              <h3 className="text-3xl font-medium mb-6">Market Analysis</h3>
              <p className="text-[19.2px]  text-desc-color">
                Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare
                elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est
                urna.
              </p>
            </div>
          </article>
          <article className="flex flex-col md:flex-row items-start gap-8">
            <div>
              <BsChatSquare className="text-6xl" />
            </div>

            <div>
              <h3 className="text-3xl font-medium mb-6">Fast Support</h3>
              <p className="text-[19.2px]  text-desc-color">
                Credit goes to Pexels website for all images used in this
                template. Cras condimentum mi et sapien dignissim luctus.
              </p>
            </div>
          </article>
          <article className="flex flex-col md:flex-row items-start gap-8">
            <div>
              <MdFingerprint className="text-6xl" />
            </div>

            <div>
              <h3 className="text-3xl font-medium mb-6">Top Security</h3>
              <p className="text-[19.2px]  text-desc-color">
                You have no authority to post this template as a ZIP file on
                your template collection websites. You can use this template for
                your commercial websites.
              </p>

              <button className="bg-main-color text-white text-xl py-3 px-8 mt-10 hover:bg-alt-color transition ease-in">
                Learn More
              </button>
            </div>
          </article>
          <article className="flex flex-col md:flex-row items-start gap-8">
            <div>
              <MdGroups className="text-6xl" />
            </div>

            <div>
              <h3 className="text-3xl font-medium mb-6">Social Work</h3>
              <p className="text-[19.2px]  text-desc-color">
                You can change Font Awesome icons by either{" "}
                <i className="font-bold">fas or far</i> in the HTML codes. For
                Examples:
                <br />
                <em>
                  &lt;i class="fas fa-users"&gt;&lt;i class="far
                  fa-chart-bar"&gt;
                </em>
              </p>

              <button className="bg-main-color text-white text-xl py-3 px-6 mt-10 hover:bg-alt-color transition ease-in">
                Details
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
