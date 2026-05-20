"use client";

import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function TextContent({ path, title, descriptions, features, wide = false }) {
  return (
    <div className={wide ? "w-full" : "lg:max-w-lg"}>
      <a
        href={`https://github.com/BNewman73/${path}`}
        className="relative z-10 text-base/7 font-semibold text-indigo"
      >
        To GitHub
      </a>
      <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
        {title}
      </p>
      <div className={wide ? "max-w-3xl" : ""}>
        {descriptions.map((description, index) => (
          <p key={index} className="mt-6 text-lg/8 text-muted-foreground">
            {description}
          </p>
        ))}
      </div>
      <dl
        className={
          wide
            ? "mt-10 grid grid-cols-1 gap-8 text-base/7 text-muted-foreground sm:grid-cols-2 lg:grid-cols-3"
            : "mt-10 max-w-xl space-y-8 text-base/7 text-muted-foreground lg:max-w-none"
        }
      >
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
  );
}

function ProjectCarousel({ plugin, images }) {
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full rounded-xl shadow-xl ring-1 ring-border"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img
              className="mx-auto max-h-[700px] w-full object-contain p-6"
              alt="Product screenshot"
              src={image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default function Project({
  path,
  title,
  descriptions,
  features,
  images,
  wideLayout = false,
}) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  if (wideLayout) {
    return (
      <div id={path} className="overflow-hidden bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ProjectCarousel plugin={plugin} images={images} />
          <div className="mt-16">
            <TextContent
              path={path}
              title={title}
              descriptions={descriptions}
              features={features}
              wide
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={path} className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <TextContent
              path={path}
              title={title}
              descriptions={descriptions}
              features={features}
            />
          </div>
          <div className="my-auto md:-ml-4 lg:-ml-0 sm:w-228 w-full mx-auto max-w-full">
            <ProjectCarousel plugin={plugin} images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}
