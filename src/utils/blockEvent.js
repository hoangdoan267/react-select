export default event => {
	event.preventDefault();
	event.stopPropagation(); event.nativeEvent.stopImmediatePropagation();
	if ((event.target.tagName !== 'A') || !('href' in event.target)) {
		return;
	}
	if (event.target.target) {
		window.open(event.target.href, event.target.target);
	} else {
		window.location.href = event.target.href;
	}
};
