import React from 'react'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import {Container} from "react-bootstrap";
import "react-image-lightbox/style.css";
// @ts-ignore
import { images, CustomImage } from "./images.ts";
import Particle from "../Particle";

export default function Agallery() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <section>
      <Container>
        <Particle/>
        <Container fluid className = "gallery-section">
          <div className = "gallery-section">
            <h1 className="project-heading"> Photography <strong className="purple">Gallery </strong></h1>
            <p style={{ color: "white" }}>What I've been working on recently! </p>
            <Gallery images={images} onClick={handleClick} enableImageSelection={false} rowHeight={600} />
            {!!currentImage && (
              <Lightbox
                mainSrc={currentImage.original}
                imageTitle={currentImage.caption}
                mainSrcThumbnail={currentImage.src}
                nextSrc={nextImage.original}
                nextSrcThumbnail={nextImage.src}
                prevSrc={prevImage.original}
                prevSrcThumbnail={prevImage.src}
                onCloseRequest={handleClose}
                onMovePrevRequest={handleMovePrev}
                onMoveNextRequest={handleMoveNext}
              />
            )}
          </div>
          {/* <audio autoPlay loop controls className='gallery-music'>
            <source src = {Song} type="audio/mpeg"/>
          </audio> */}
        </Container>
      </Container>
    </section>
  );
};