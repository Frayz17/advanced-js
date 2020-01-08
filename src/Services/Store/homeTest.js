
export default (state = {
	data: [{
		id: 1,
		type: 'QuestionVariant1',
		title: 'Question1 ?',
		text: 'Text1',
		options: [{
			id: 1,
			title: 'Option1',
			text: 'Text1'
		}, {
			id: 2,
			title: 'Option2',
		}, {
			id: 3,
			title: 'Option3',
		}, {
			id: 4,
			title: 'Option4',
		}] 
	}, {
		id: 2,
		type: 'QuestionVariant2',
		title: 'Question2 ?',
		options: [{
			id: 1,
			title: 'Option2 1',
			text: 'Text2 1'
		}, {
			id: 2,
			title: 'Option2 2',
		}, {
			id: 3,
			title: 'Option2 3',
		}] 
	}, {
		id: 3,
		type: 'QuestionVariant3',
		title: 'Question3 ?',
		options: [{
			id: 1,
			title: 'Option3 1',
		}, {
			id: 2,
			title: 'Option3 2',
		}, {
			id: 3,
			title: 'Option3 3',
		}, {
			id: 4,
			title: 'Option3 4',
			text: 'Text3 1'
		}] 
	}],
	result: 0,
	time: 0,
}, action) => {
	return { ...state };
};

