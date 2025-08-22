import Image from "next/image";
import { Outfit } from "next/font/google";

import "./page.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stripe } from "@/lib/stripe";
import { ProductType } from "@/types/PostType";
import Stripe from "stripe";
import { Carousel } from "@/components/carousel";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

interface Props {
  products: Stripe.Product[];
}

export default async function Home() {
  const products = await stripe.products.list({
    // expand: ["data.default_price"],
    limit: 5,
  });
  console.log("products from stripe", products);
  const marqueeCourse = [
    "Zara",
    "Tommy Hilfiger",
    "Lenovo",
    "Gucci",
    "Under Armour",
    "L'Oréals",
    "Dell",
    "Huawei ",
    "Puma",
    "Gucci",
    "Under Armour",
    "Levi’s",
    "Philips",
  ];
  return (
    <div className={`${OutfitFont.className}`}>
      {/* Hero Section */}
      <section className="hero-section props-wrapper py-3">
        <div className="container items-center h-full relative">
          <div className="flex mx-auto item-center border-dotted border-slate-300 border-3 rounded-lg pl-7 pr-3">
            <div className="her-img flex-1 w-[70%]">
              {/* <img className="w-full" src={heroImg} alt="Hero Image" /> */}
              <Image
                src={"/hero-img.png"}
                alt="Hero Image"
                className="w-full"
                width="500"
                height="300"
                priority // Optional: if it's above-the-fold content
              />
            </div>
            <div className="flex flex-col w-[30%] pl-5">
              <div className="uppercase pb-6 font-bold">
                <span>Get upto</span>
                <span className="block text-5xl">
                  <span className="text-primary">50%</span> off
                </span>
              </div>
              <h1 className="text-3 title font-nohemi capitalize flex align-center pb-3">
                Just
                <span className="font-black slider ml-3">
                  <span className="slide1 text-orange-400">Click Away</span>
                  <span className="slide2 text-orange-400">Shop Smart</span>
                  <span className="slide3 text-orange-400">Live Better</span>
                </span>
              </h1>
              <p className="text-slate-400">
                Discover a better way to shop — stylish, simple, and delivered
                to your door
              </p>
            </div>
          </div>
          <div className="props ">
            <Image
              src={"/ballons.png"}
              alt="Balloons"
              width={37}
              height={100}
            />
          </div>
        </div>
      </section>
      {/* Marquee Section */}
      <section>
        <div className="list-marquee text-center item-center container">
          {[...Array(3)].map((_, index) => (
            <ul key={index} className="list-none list text-gray-400 font-bold">
              {marqueeCourse.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </section>
      {/* View Products */}
      <section className="mt-10">
        <div className="container">
          <div className="flex justify-between">
            <h3>Flash Sale</h3>
            <Link href="/products" className="flex items-center">
              <ArrowRight size={18} className="mr-1 hover:mr-3" />
              View All
            </Link>
          </div>
          <div className="cards flex flex-wrap justify-between mt-5">
            {products.data.map((item, i) => {
              console.log("map item", item.images[0]);
              return (
                <div className="card border">
                  <Image
                    src={"/props-2.svg"}
                    alt="Product 1"
                    width={200}
                    height={200}
                  />
                  <h4>{item.id}</h4>
                  <p>{item.description}</p>
                </div>
              );
            })}
            <div className="card border">
              <Image
                src={"/props-2.svg"}
                alt="Product 1"
                width={200}
                height={200}
              />
              <h4>Product 1</h4>
              <p>Description of Product 1</p>
            </div>
            <div className="card border">
              <Image
                src={"/props-2.svg"}
                alt="Product 1"
                width={200}
                height={200}
              />
              <h4>Product 2</h4>
              <p>Description of Product 2</p>
            </div>
            <div className="card border">
              <Image
                src={"/props-2.svg"}
                alt="Product 1"
                width={200}
                height={200}
              />
              <h4>Product 1</h4>
              <p>Description of Product 1</p>
            </div>
            <div className="card border">
              <Image
                src={"/props-2.svg"}
                alt="Product 1"
                width={200}
                height={200}
              />
              <h4>Product 2</h4>
              <p>Description of Product 2</p>
            </div>
          </div>
        </div>
      </section>

      {/* carouel */}
      <section>
        <div className="container">
          <Carousel products={products.data} />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="mid-block text-center mx-auto mt-10">
            <h2 className="text-2 title">
              Your Wishlist
              <span className="text-primary font-bold ml-2">
                Delivered Fast
              </span>
            </h2>
            <p>Why Pay More? Shop Online for Less</p>
          </div>
        </div>
        <div className="video-cards">
          {/* <Carousel>
            {videoCard.map((video, i) => (
              <div className="video-wrapper h-full" key={i}>
                <div className="video-item item h-full">
                  <img src={video.img} alt="Video Image" />
                  <video muted loop preload="auto">
                    <source src={video.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <span className="video-shadow"></span>
              </div>
            ))}
          </Carousel> */}
          {/* <div className="owl-carousel owl-theme" id="owl-carousel">
            {videoCard.map((video, i) => (
              <div className="video-wrapper h-full">
                <div className="video-item item h-full">
                  <img src={video.img} alt="Video Image" />
                  <video muted loop preload="auto">
                    <source src={video.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <span className="video-shadow"></span>
              </div>
            ))}
          </div> */}
        </div>
      </section>
      {/* <div className="h-screen flex items-center justify-center gap-6">
      <Button size="xl" className="rounded-full text-secondary">
        
      <CirclePlus />
        Click me
        </Button>
    </div> */}
    </div>
  );
}
