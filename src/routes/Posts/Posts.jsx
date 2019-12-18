import React from 'react';
import { connect } from 'react-redux';
import { setLang } from 'Services/Lang';
import Post from 'modules/Post';
import Header from 'modules/Header';
import Button from 'components/Button';
import loadPosts from './loadPosts.js';

export default connect((state) => {
	return {
		postsLength: (state.posts || []).length || 0,
	};
})(React.memo(({
	postsLength,
}) => {
	// onMount
	React.useEffect(() => {
		loadPosts();
	}, []);

	return <>
		<Header />
		<Button onClick={() => setLang('ua')}>
			UA
		</Button>
		<Button onClick={() => setLang('ru')}>
			RU
		</Button>
		<Button onClick={() => setLang('en')}>
			EN
		</Button>
		{(() => {
			let i = 0,
				collector = [];

			while (i < postsLength) {
				collector.push(<Post
					key={i}
					index={i} />);
				i++;
			}
			return collector;
		})()}
	</>;
}));

