import Image from "next/image";

export default function HomeAbout() {
  const images = [
    {
      src: "/about-one.jpg",
      alt: "random alt",
    },
    {
      src: "/about-two.jpg",
      alt: "random alt",
    },
    {
      src: "/about-three.jpg",
      alt: "random alt",
    },
  ];

  return (
    <section>
      <div className="container container_padding">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="absolute inset-0 lg:static grid grid-cols-2 grid-rows-2 gap-6">
            <div className="relative">
              <GridImage {...images[0]} />
            </div>
            <div className="relative row-span-2">
              <GridImage {...images[1]} />
            </div>
            <div className="relative">
              <GridImage {...images[2]} />
            </div>
          </div>
          <div className="my-20 px-4 py-6 lg:p-0 text-gray z-10 mx-4 bg-white bg-opacity-80">
            <h2 className="column_title">About us</h2>
            <p className="text-justify">
              Rainbow Wholefoods was established in 2000 and has become one of
              the best health food shops for people who want to live and
              maintain a healthy lifestyle. In January 2021, we relocated from
              our shop on Terania Street in North Lismore, to a large warehouse
              at 793 Boyle Road, Coffee Camp, NSW. Our range includes good
              quality organic and chemical-free fruits and vegetables, healthy
              bread, organic milk, vitamins and minerals, natural organic skin
              care and chemical-free household products as well as a wide
              selection of organic salads, ice blocks and drinks. Rainbow
              Wholefoods also carry a huge range of organic, chemical free and
              gluten free groceries, prepacked grains, flours, cereals, and
              dried fruits. We have a range of bulk foods which are unrefined,
              free of preservatives, chemicals, artificial colourings,
              additives, sweeteners and flavours. Browse through our wide
              selection of medicinal and culinary herbs which are in
              alphabetical order for easy finding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

type GridImageProps = {
  src: string;
  alt: string;
};

function GridImage({ src, alt }: GridImageProps) {
  return (
    <>
      <div className="absolute lg:hidden inset-0 bg-black/20 z-10" />
      <Image src={src} alt={alt} fill className="object-cover" />;
    </>
  );
}
