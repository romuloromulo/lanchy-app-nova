"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComp() {
  return (
    <>
      <div className="max-w-[1200px] mt-5 mx-auto">
        <Carousel
          showArrows={true}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}>
          <div>
            <img src="/images/banners/1.png" />
          </div>
          <div>
            <img src="/images/banners/2.png" />
          </div>
          <div>
            <img src="/images/banners/3.png" />
          </div>
        </Carousel>
      </div>
    </>
  );
}
