export const navBarOptions = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Menu",
    link: "/menu",
  },
  {
    title: "Contact",
    link: "/contact",
  },
] as const;

export const fakeProductCategories = [
  {
    name: "Vitamins",
    tags: "Immunity Support, Energy Boost, Bone Health, Skin Health, Hair Health, Eye Health, Metabolism Support, Prenatal Vitamins, Children’s Vitamins, Senior Vitamins",
    icon: {
      src: "/categories-icon-one.svg",
      alt: "Icon representing various vitamin supplements",
    },
  },
  {
    name: "Supplements",
    tags: "Protein, Amino Acids, Pre-Workout, Post-Workout, Muscle Recovery, Weight Loss, Digestive Health, Joint Support, Stress Relief, Cognitive Support",
    icon: {
      src: "/categories-icon-one.svg",
      alt: "Icon representing various health supplements",
    },
  },
  {
    name: "Herbal Remedies",
    tags: "Echinacea, Ginseng, Turmeric, Ashwagandha, Ginkgo Biloba, Aloe Vera, Milk Thistle, Chamomile, Lavender, Peppermint",
    icon: {
      src: "/categories-icon-one.svg",
      alt: "Icon representing herbal remedies and natural ingredients",
    },
  },
  {
    name: "Personal Care",
    tags: "Skin Care, Hair Care, Oral Health, Hygiene Products, Essential Oils, Men's Grooming, Women's Health, Natural Deodorants, Body Lotion, Sun Protection",
    icon: {
      src: "/categories-icon-one.svg",
      alt: "Icon representing personal care products",
    },
  },
  {
    name: "Sports Nutrition",
    tags: "Protein Powder, Creatine, BCAA, Electrolytes, Endurance, Muscle Growth, Energy Bars, Hydration, Fat Burners, Performance Enhancers",
    icon: {
      src: "/categories-icon-one.svg",
      alt: "Icon representing sports nutrition products for fitness",
    },
  },
] as const;
