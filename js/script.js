console.clear();

const images = ["img/image-1.jpg", "img/image-2.jpg", "img/image-3.jpg"];
const texts = [["WATER"], ["FOREST"], ["MOUNTAINS"]];

const slider = new rgbKineticSlider({
	// images and content sources
	slideImages: images,
	itemsTitles: texts,

	// displacement images sources
	backgroundDisplacementSprite: "img/map-3.jpg",
	cursorDisplacementSprite: "img/displace-circle.png",

	// cursor displacement effect 
	cursorImgEffect: true,
	cursorTextEffect: false,
	cursorScaleIntensity: 0.6,
	cursorMomentum: 0.2,

	// swipe 
	swipe: true,
	swipeDistance: window.innerWidth * 0.35,
	swipeScaleIntensity: 2,

	// slide transition
	slideTransitionDuration: 1.2,
	transitionScaleIntensity: 30,
	transitionScaleAmplitude: 160,

	// regular navigation
	nav: true,
	navElement: ".main-nav",

	// texts settings
	textsDisplay: true,
	textsTiltEffect: true,
	googleFonts: ["Playfair Display: 700"],
	textsRgbEffect: true,
	textsRgbIntensity: 1,
	textTitleSize: 130,
});
