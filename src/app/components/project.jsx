"use client";

import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Project({
  path,
  title,
  descriptions,
  features,
  images,
}) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <div id={path} className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <a
                href={`https://github.com/BNewman73/${path}`}
                className="relative z-10 text-base/7 font-semibold text-indigo"
              >
                To GitHub
              </a>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
                {title}
              </p>
              <div>
                {descriptions.map((description, index) => (
                  <p
                    key={index}
                    className="mt-6 text-lg/8 text-muted-foreground"
                  >
                    {description}
                  </p>
                ))}
              </div>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-muted-foreground lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-foreground">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Carousel
            plugins={[plugin.current]}
            className="my-auto mx-auto w-full max-w-full rounded-xl shadow-xl ring-1 ring-border sm:w-228 md:-ml-4 lg:-ml-0"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="">
                  <img
                    className="flex items-center justify-center p-6"
                    alt="Product screenshot"
                    src={image}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
