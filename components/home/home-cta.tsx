import Link from "next/link";

export default function HomeCta() {
  return (
    <section className="bg-secondary_two">
      <div className="container container_padding grid grid-cols-2">
        <div className="bg-white z-10 w-[190%] md:w-[167%] lg:w-[144%] xl:w-[128%] py-16 my-12 px-7 sm:px-12 flex flex-col justify-center ">
          <h3 className="text-primary_one column_title">
            Free Naturopathic Consultations
          </h3>
          <p className="text-gray">
            Anthony Stillone (DBM, DNM, DHM, Certified Member of National
            Herbalist Association of Australia # 13470) provides a naturopathic
            consultation service (free to Healthy Lifestyle Club members). He
            previously hosted ‘Healthy Chat’ every Sunday at 2pm on Radio 92.5
            FM, but is now happy for a chat most any of the time.
          </p>
          <Link href="/" className="button_primary mt-[5%]">
            Contact Us
          </Link>
        </div>
        <div className="bg-[url('@/public/cta-bg.jpg')] bg-cover bg-center" />
      </div>
    </section>
  );
}
