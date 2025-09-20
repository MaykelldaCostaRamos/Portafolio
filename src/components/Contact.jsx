export default function Contact() {
  return (
    <form
      action=""
      id="contact"
      className="py-20 flex flex-col justify-center items-start text-black px-4 "
    >
      <div className="m-2 text-lg">
        <h2 className="text-4xl font-bold mb-8 px-2">Contact</h2>

        <div className="mb-8">
          <label htmlFor="name" className="font-medium px-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            className="w-full mt-2 p-2 focus:outline-none focus:placeholder-transparent  bg-transparent appearance-none"
            required
          />
          <div className="border-0 border-b border-gray-300/30 "></div>
        </div>
        <div className="mb-8">
          <label htmlFor="email" className="font-medium px-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="w-full mt-2 p-2 focus:outline-none focus:placeholder-transparent bg-transparent appearance-none"
            required
          />
          <div className="border-0 border-b border-gray-300/30 "></div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="font-medium px-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message...."
            rows="4"
            className="w-full mt-2 p-2 focus:outline-none focus:placeholder-transparent bg-transparent appearance-none"
          ></textarea>
          <div className="border-0 border-b border-gray-300/30 "></div>
        </div>

        <button
          type="submit"
          className="w-full text-white  rounded-lg text-xl py-3 bg-gradient-to-r from-indigo-700 via-indigo-950 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80"
    
        >
          SEND REQUEST
        </button>
      </div>
    </form>
  );
}
