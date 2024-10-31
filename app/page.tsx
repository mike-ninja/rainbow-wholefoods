import { HomeLanding } from "@/components";
import HomeAbout from "@/components/home/home-about";
import HomeProducts from "@/components/home/home-products";
import { fakeProductCategories } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HomeLanding />
      <HomeAbout />
      <HomeProducts catogeries={fakeProductCategories} />
    </>
  );
}
