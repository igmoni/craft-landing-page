import { FAQ } from "@/components/FAQ";
import { ForWho } from "@/components/ForWho";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Problem } from "@/components/Problem";

const page = () => {
  return (
    <div>
      <Hero />
      <Problem />
      <How />
      <ForWho />
      <FAQ />
    </div>
  );
};

export default page;
