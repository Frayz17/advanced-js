import React from 'react';
// import { getStore } from 'Services/Store';
import { connect } from 'react-redux';
import Block, {
	BlockFlex,
	BlockAlignCenter,
	Block6md12
} from 'components/Block';
import Typography, {TypographyTitle} from 'components/Typography';
import Image from 'components/Image';
import Icon from 'components/Icon';
import Comments from 'modules/Comments';

export default connect((state, { index = 0 }) => {
	const {
		comments,
		...rest
	} = (state.posts || [])[index];

	return rest;
})(React.memo(({
	title,
	img = `https://picsum.photos/id/985/400/400.jpg`,
	text = '',
	likes = 0,
	dislikes = 0,
	created_at = ''
}) => {
	return title ? 
		<BlockFlex style={{}}>
			<Block6md12 style={{padding: '2em', border: '0.2px solid rgba(0,0,0,0.1)'}}>
				<BlockAlignCenter>
					<TypographyTitle>
						{title}
					</TypographyTitle>
				</BlockAlignCenter>
				<Block>
					<Image style={{width:'100%', margin: '0.5em 0'}} src={img} alt={title} />
				</Block>				
				<BlockAlignCenter> 
					<Typography style={{fontStyle: 'italic'}}>
						{created_at}
					</Typography>
				</BlockAlignCenter>
				<Block style={{padding: '20px'}}> 
					<Typography>
						{text}
					</Typography>
				</Block>
				<Block> 
					<Icon style={{padding: '0 5px'}} name={'thumbs-up'}> {likes}</Icon>
					<Icon style={{padding: '0 5px'}} name={'thumbs-down'}> {dislikes}</Icon>
				</Block>
			</Block6md12>
			<Block6md12 style={{padding: '2em'}}>
				<Comments />
			</Block6md12>
		</BlockFlex> :
		<React.Fragment />;
}));
