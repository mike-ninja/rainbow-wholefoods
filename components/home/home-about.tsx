import Image from "next/image";
import { Fragment } from "react";

export default function HomeAbout() {
  const images = [
    {
      src: "/landing-background.png",
      alt: "random alt",
    },
    {
      src: "/landing-background.png",
      alt: "random alt",
    },
    {
      src: "/landing-background.png",
      alt: "random alt",
    },
  ];

  return (
    <section>
      <div className="container container_padding grid grid-cols-2 gap-6">
        <div className="grid grid-cols-2 grid-rows-2 gap-6">
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
        <div className="py-20">
          <h2 className="title text-2xl text-gray mb-7">About us</h2>
          <p className="text-gray">
            Rainbow Wholefoods was established in 2000 and has become one of the
            best health food shops for people who want to live and maintain a
            healthy lifestyle. In January 2021, we relocated from our shop on
            Terania Street in North Lismore, to a large warehouse at 793 Boyle
            Road, Coffee Camp, NSW. Our range includes good quality organic and
            chemical-free fruits and vegetables, healthy bread, organic milk,
            vitamins and minerals, natural organic skin care and chemical-free
            household products as well as a wide selection of organic salads,
            ice blocks and drinks. Rainbow Wholefoods also carry a huge range of
            organic, chemical free and gluten free groceries, prepacked grains,
            flours, cereals, and dried fruits. We have a range of bulk foods
            which are unrefined, free of preservatives, chemicals, artificial
            colourings, additives, sweeteners and flavours. Browse through our
            wide selection of medicinal and culinary herbs which are in
            alphabetical order for easy finding.
          </p>
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
  return <Image src={src} alt={alt} fill className="object-cover" />;
}
