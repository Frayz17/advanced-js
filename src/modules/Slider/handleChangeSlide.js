
export default (currentStore = {}, slideIndex = 0) => {
	const { currentSlide = 0, slides = [] } = currentStore;

	if (slideIndex === currentSlide) {
		return currentStore;
	}

	const slidesCount = slides.length || 1;
	const slideWidth = +(100 / slidesCount).toFixed(2);
	const nextIndex = currentSlide < slideIndex ?
		currentSlide + 1 :
		currentSlide - 1;

	if (nextIndex >= 0 && nextIndex <= slidesCount - 1) {
		return {
			...currentStore,
			scrollX: slideWidth * nextIndex,
			currentSlide: nextIndex,
		};
	}
	return currentStore;
};
