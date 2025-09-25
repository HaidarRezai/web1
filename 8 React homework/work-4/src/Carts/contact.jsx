import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
  console.log("Form data:", data);
  alert("Message sent successfully 🚀");
};


  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-6">
        CONTACT THE EMPIRE
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
        Got ambition? Want to rise above the average? <br />
        Reach out and take your first step towards power and freedom.
      </p>

      {/* Contact Form */}
      <form
        className="bg-zinc-900 border border-yellow-500 rounded-xl p-8 shadow-lg w-full max-w-lg text-left"
        onSubmit={handleSubmit(onSubmit) } noValidate
      >
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-yellow-500 font-bold mb-2">Name</label>
          <input
            {...register("name", { required: "Please enter your name" })}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 text-white focus:border-yellow-500 focus:outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-yellow-500 font-bold mb-2">Email</label>
          <input
            {...register("email", {
              required: "Please enter your Email Address",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 text-white focus:border-yellow-500 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-yellow-500 font-bold mb-2">Message</label>
          <textarea
            {...register("message", { required: "Please enter a message" })}
            rows="4"
            placeholder="Write your message"
            className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 text-white focus:border-yellow-500 focus:outline-none"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-3 font-bold rounded-lg shadow-lg transition duration-300 ${
            isValid
              ? "bg-yellow-500 text-black hover:bg-yellow-600"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          Send Message 🚀
        </button>
      </form>
    </div>
  );
}

export default Contact;
