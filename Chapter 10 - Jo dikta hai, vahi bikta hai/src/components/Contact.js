import ContactImage from "../Images/ContactImage.jpg";

const Contact = () => {
  return (
    <>
      <div className="container justify-center p-8 flex flex-col md:flex-row md:mb-0">
        <div className="w-full md:w-1/2 md:mx-6">
          <div className="w-4/5 md:w-full lg:w-4/5 2xl:w-4/5 mx-auto mb-4 md:mb-0">
            <img
              src={ContactImage}
              alt="Interactive Image"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <form className="w-full max-w-md">
              <div className="mb-4">
                <label
                  for="full-name"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label for="message" class="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white font-bold py-2 rounded-lg hover:bg-indigo-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
