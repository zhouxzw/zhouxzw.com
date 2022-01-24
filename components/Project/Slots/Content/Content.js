import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import Iframe from "react-iframe";
function Content(props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div>
      <h2>Overview</h2>
      <p>{props.project.content}</p>

      <h2>Gallery</h2>

      {props.project.videos.length !== 0 ? (
        <div className="center-image">
          {props.project.videos.map((video, key) => {
            return (
              <Iframe
                key={"video " + key}
                url="https://www.youtube.com/embed/4AqHY7XUyAM"
                className="videos"
              ></Iframe>
            );
          })}
        </div>
      ) : null}

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {props.project.carousel &&
              props.project.carousel.map((image, key) => {
                return (
                  <div className="embla__slide" key={"carousel-key: " + key}>
                    <div className="center-image">
                      <div className="image-holder">
                        <Image
                          src={image}
                          alt="carousel-image"
                          width={100}
                          height={60}
                          quality={100}
                          layout="responsive"
                        ></Image>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
              className={`embla__dot ${
                index === selectedIndex ? "is-selected" : ""
              }`}
              type="button"
              key={"dot-key: " + index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
