import Hero from "../Hero";

export default function HeroExample() {
  return (
    <Hero
      onSearchClick={() => console.log("Search rooms clicked")}
      onBookNowClick={() => console.log("Book now clicked")}
    />
  );
}
