
export default (state = {
	links: [{
		path: '/',
		title: 'main_page',
	}, {
		path: '/posts',
		title: 'post_page',
	}, {
		path: '/sign-in',
		title: 'form_page',
	}],
}, action) => {
	return { ...state };
};
