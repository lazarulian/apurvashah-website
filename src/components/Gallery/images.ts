import { Image } from "react-grid-gallery";
import img1 from "./aimages/EditedPhotos/ACA01775.jpg";
import img2 from "./aimages/EditedPhotos/ACA01825.jpg";
import img3 from "./aimages/EditedPhotos/Arshia2022-199.jpg";
import img4 from "./aimages/EditedPhotos/Arshia2022-247.jpg";
import img5 from "./aimages/EditedPhotos/Arshia2022-326.jpg";
import img6 from "./aimages/EditedPhotos/Arshia2022-415.jpg";
import img7 from "./aimages/EditedPhotos/Arshia2022-451.jpg";
import img8 from "./aimages/EditedPhotos/Arshia2022-644.jpg";
import img9 from "./aimages/EditedPhotos/Arshia2022-641.jpg";
import img10 from "./aimages/EditedPhotos/Arshia2022-560.jpg";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: img10,
    original: img10,
    width: 333,
    height: 500,
    
  },
  {
    src: img1,
    original: img1,
    width: 500,
    height: 333,
  },
  {
    src: img2,
    original: img2,
    width: 500,
    height: 333,
  },
  {
    src: img4,
    original: img4,
    width: 333,
    height: 500,
  },
  {
    src: img5,
    original: img5,
    width: 333,
    height: 500,
  },
  {
    src: img6,
    original: img6,
    width: 333,
    height: 500,
  },
  {
    src: img9,
    original: img9,
    width: 500,
    height: 333,
  },
  {
    src: img7,
    original: img7,
    width: 500,
    height: 295,
  },
  {
    src: img8,
    original: img8,
    width: 333,
    height: 500,
  },
  
];