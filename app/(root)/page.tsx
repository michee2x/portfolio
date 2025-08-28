import Section_One from "@/sections/home/Section_One";
import Section_Two from "@/sections/home/Section_Two";

export default function Home() {
  return (
    <div className="w-full text-plat min-h-[400vh]">
      <Section_One />
      <Section_Two />
    </div>
  );
}
