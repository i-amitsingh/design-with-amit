declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
