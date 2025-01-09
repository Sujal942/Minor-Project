import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    // blue-800
    <div>
      <section className="bg-gradient-to-tr from-indigo-700 via-black to-gray-500 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-yellow-500 via-orange-200 to-red-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Effortless File Sharing.
              <span className="sm:block"> Fast, Secure, and Simple. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl text-gray-300">
              Share files with ease! Our platform provides seamless file sharing
              with top-notch security and fast upload speeds.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/upload"
                className="block w-full rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              >
                Get Started Now
              </Link>

              <a
                className="block w-full rounded border border-yellow-500 px-12 py-3 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring active:bg-yellow-400 sm:w-auto"
                href="#"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Key Features */}
      <section id="features" className="py-32 bg-gray-800 text-white">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-yellow-400">
            Key Features
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            Our platform offers a wide range of features designed to make file
            sharing easy and secure.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-500">
                Fast Uploads
              </h3>
              <p className="mt-4 text-gray-300">
                Enjoy lightning-fast upload speeds no matter the file size. Say
                goodbye to slow uploads.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-500">
                Top-Notch Security
              </h3>
              <p className="mt-4 text-gray-300">
                We use advanced encryption and secure storage methods to ensure
                your files remain private.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-500">
                Easy Sharing
              </h3>
              <p className="mt-4 text-gray-300">
                Share your files quickly with anyone, anywhere. Just send a
                Unique ID and Password, your files are ready to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: How It Works */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-yellow-400">
            How It Works
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            Our platform is built to be simple and intuitive. Here's how you can
            get started:
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-500">
                Step 1: Upload Files
              </h3>
              <p className="mt-4 text-gray-300">
                Drag and drop your files or select them from your device. It’s
                that easy!
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-500">
                Step 2: Secure Storage
              </h3>
              <p className="mt-4 text-gray-300">
                Your files are encrypted and securely stored on our servers.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-500">
                Step 3: Share Unique ID and Password
              </h3>
              <p className="mt-4 text-gray-300">
                Share the Unique ID and Password with anyone, and they can
                access your file instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Testimonials */}
      <section className="py-32 bg-gray-800 text-white">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-yellow-400">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            Don’t just take our word for it. Here’s what our users have to say:
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-300">
                "The easiest file-sharing service I’ve ever used. It’s fast,
                secure, and works seamlessly!"
              </p>
              <p className="mt-4 text-md font-semibold text-yellow-400">
                John Doe
              </p>
              <p className="text-sm text-gray-500">Freelancer</p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-300">
                "I can upload and share large files without worrying about
                security. Highly recommend!"
              </p>
              <p className="mt-4 text-md font-semibold text-yellow-400">
                Jane Smith
              </p>
              <p className="text-sm text-gray-500">Business Owner</p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-300">
                "Fast uploads and super easy to use. Great service for sharing
                my creative projects."
              </p>
              <p className="mt-4 text-md font-semibold text-yellow-400">
                Mark Taylor
              </p>
              <p className="text-sm text-gray-500">Creative Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-600  text-white">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            Join thousands of satisfied users who are already sharing their
            files with ease. Start today!
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
