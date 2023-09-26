export function preloadImages(array) {
  array.forEach((item) => {
    new Image().src = item.image;
  });
}
