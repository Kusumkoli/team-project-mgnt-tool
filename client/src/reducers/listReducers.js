const initialiState = [
	{
		title: "Wedding Bells",
		id: 0,
		cards: [
			{
				id: 0,
				text: "wedding in six months"
			},
			{
				id: 1,
				text: "prepare for ring ceremony"
			},
		]
	},
	{
		title: "Major Project",
		id: 1,
		cards: [
			{
				id: 0,
				text: "Login system"
			},
			{
				id: 1,
				text: "Dashboard Creation"
			},
		]
	},
];
 
const listReducer = (state = initialiState, action) => {
	switch(action.type) {
		default:
			return state; 
	}
};

export default listReducer;