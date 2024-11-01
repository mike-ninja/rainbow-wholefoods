import Image from "next/image";
import Link from "next/link";

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
  return (
    <section className="bg-accent">
      <div className="container container_padding flex flex-col items-center">
        <h2 className="text-gray text-center text-6xl">Our Products</h2>
        <div className="grid grid-cols-3 gap-x-16 gap-y-6 max-w-[1250px] mx-auto my-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white w-[350px] px-8 py-6 mx-auto flex flex-col items-center justify-center"
            >
              <Image
                src={category.icon.src}
                alt={category.icon.alt}
                width={135}
                height={135}
              />
              <h3 className="text-xl text-secondary_three py-6">
                {category.name}
              </h3>
              <p className="text-gray text-sm text-center">{category.tags}</p>
            </div>
          ))}
        </div>
        <Link href="/" className="button_primary">
          Our Products
        </Link>
      </div>
    </section>
  );
}
