"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import "./home.css";
import { useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { EmblaOptionsType } from "embla-carousel";

type ProductCategory = {
  name: string;
  tags: string;
  icon: {
    src: string;
    alt: string;
  };
};

type HomeProductsProps = {
  categories: ProductCategory[];
};

export default function HomeProducts({ categories }: HomeProductsProps) {
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-accent">
      <div className="container container_padding flex flex-col items-center bg-opacity-0">
        <h2 className="text-gray text-center text-6xl">Our Products</h2>
        <div className="embla w-full">
          <div ref={emblaRef}>
            <div className="embla_container mx-auto my-8">
              {categories.map((category, index) => (
                <div key={index} className="embla_slide">
                  <div className="w-[90%] h-full bg-white px-8 py-6 mx-auto flex flex-col items-center justify-center">
                    <Image
                      src={category.icon.src}
                      alt={category.icon.alt}
                      width={135}
                      height={135}
                    />
                    <h3 className="text-xl text-secondary_three py-6">
                      {category.name}
                    </h3>
                    <p className="text-gray text-sm text-center">
                      {category.tags}
                    </p>
                    <Link
                      href="/"
                      className="text-gray title underline mt-4 hover:italic"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="embla_prev" onClick={scrollPrev}>
            <FaChevronLeft />
          </button>
          <button className="embla_next" onClick={scrollNext}>
            <FaChevronRight />
          </button>
        </div>
        <Link href="/" className="button_primary">
          Our Products
        </Link>
      </div>
    </section>
  );
}
