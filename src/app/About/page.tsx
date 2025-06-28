"use client";

import { Typewriter } from "react-simple-typewriter";

const page = () => {
  return (
    <div className={`min-h-screen bg-gray-800 text-white`}>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-400">
            About Nznime
          </h1>
          <p className="mt-4 text-lg  max-w-3xl mx-auto">
            <Typewriter
              words={[
                `Nznime is your ultimate destination for streaming anime and
              exploring manga. We bring you the best of Japanese pop culture with
              a seamless, ad-free experience. Discover a world of captivating`,
              ]}
              loop={1}
              typeSpeed={60}
              delaySpeed={80}
            ></Typewriter>
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-purple-400">
                Our Mission
              </h2>
              <p className="mt-4">
                At Nznime, we aim to connect anime fans worldwide with
                high-quality content. Our mission is to provide a platform where
                you can watch your favorite series, discover new stories, and
                join a vibrant community of enthusiasts.
              </p>
            </div>
            <div>
              <img
                src="https://i.pinimg.com/474x/ea/23/58/ea2358d9cec5fee913898e3ba35202e1.jpg"
                alt="Anime Community"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Nznime */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">
            Why Choose Nznime?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Seamless Manga Experience",
                desc: "Immerse yourself in uninterrupted, high-quality manga streaming.",
              },
              {
                title: "Endless Choices Await",
                desc: "Discover a massive collection of  manga tailored to your taste.",
              },
              {
                title: "Join the Ultimate Manga Community",
                desc: "Connect, share, and dive deep into the world of anime with passionate fans like you.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-gray-900 rounded-lg flex flex-col justify-between min-h-[200px] hover:bg-gray-700 transition duration-300 active:scale-105 ease-in-out hover:scale-105"
              >
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-300">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-purple-400">Get in Touch</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Have questions or suggestions? Reach out to us via email at{" "}
            <a
              href="nizararfan22@gmail.com"
              className="text-purple-400 hover:underline"
            >
              nizararfan22@nznime.com
            </a>{" "}
            or join our community on social media!
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6  border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 NzMangas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default page;
