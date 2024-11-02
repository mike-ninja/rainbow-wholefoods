export default function ContactForm() {
  const inputClassName =
    "bg-secondary_one px-2 py-1 border-gray border-[1px] border-opacity-80";

  return (
    <section className="bg-secondary_two">
      <div className="container container_padding">
        <h2 className="section_title text-primary_one text-center">
          Contact Us
        </h2>
        <form
          // action={async (formData) => {
          //   const { error } = await sendEmail(formData);
          //
          //   if (error) {
          //     toast.error(error);
          //     return;
          //   }
          //   toast.success("Email sent successfully");
          // }}
          className="flex flex-col gap-2 w-[min(90%,40rem)] mx-auto"
        >
          <input
            required
            name="senderName"
            maxLength={500}
            placeholder="Your name"
            className={inputClassName}
          />
          <input
            required
            name="senderEmail"
            type="email"
            maxLength={500}
            placeholder="Your email"
            className={inputClassName}
          />
          <input
            required
            name="senderSubject"
            maxLength={500}
            placeholder="Your subject"
            className={inputClassName}
          />
          <textarea
            required
            name="message"
            maxLength={5000}
            placeholder="Your message"
            className={`${inputClassName} h-52`}
          />
          <button type="submit" className="button_primary mt-7 mx-auto">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}
