import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse h-70">
        <div className="flex justify-center">
          <div className="relative sm:w-[430px] sm:h-[400px]  flex justify-center w-[460px] h-[480px]">
            <Image src="/images/foodie.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">We Are Vrudeshwar</Title>
          <p className="my-5 flex flex-col items-center">
            &ldquo;Vrudheshwar Pure Veg&rdquo; is your go-to vegetarian
            restaurant, offering a delightful selection of flavorful dishes
            prepared with the freshest ingredients. Located in Pune, we
            prioritize quality, taste, and customer satisfaction, making every
            visit a memorable experience for veggie lovers. Join us for a
            delectable journey through the world of pure vegetarian cuisine.
          </p>

          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
