let mediaQueryWidth = window.matchMedia('(max-width: 768px)');
let mediaDimensions = null;

const handleWidthChange = (evt) => {
    if (evt.matches) {
        /* width <= 768px */
        mediaDimensions = {
            originalWidth: 180,
            originalHeight: 80,
            toWidth: '100%',
            toHeight: 200,
        }
    } else {
        /* width > 768px */
        mediaDimensions = {
            originalWidth: 350,
            originalHeight: 200,
            toWidth: 700,
            toHeight: 300,
        }
    }
}

mediaQueryWidth.addListener(handleWidthChange);
handleWidthChange(mediaQueryWidth);

export { mediaDimensions }