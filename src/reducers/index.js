const data = {
	dataLists: [
		{
			id: Math.random(),
			title: "Read One Book",
			description: "To Kill a Mockingbird",
			completed: false,
		},
		{
			id: Math.random(),
			title: "Drink Water",
			description: "In Morning",
			completed: true,
		},
		{
			id: Math.random(),
			title: "Play Cricket",
			description: "In Evening",
			completed: false,
		}
	],
};

export default function rootReducer(state = data, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				dataLists: [...state.dataLists, action.data]
			}
		case 'REMOVE_TODO':
			const filteredList = state.dataLists.filter(item => item.Id !== action.id);
			return {
				...state,
				dataLists: filteredList,
			}
		case 'UPDATE_TODO':
			const { dataLists } = state;
			const target = dataLists.filter(item => item.id === action.data.id)[0];
			const index = dataLists.indexOf(target);
			dataLists[index].id = action.data.id;
			dataLists[index].description = action.data.description;
			dataLists[index].title = action.data.title;
			dataLists[index].completed = action.data.completed;
			return {
				...state,
				dataLists: [...state.dataLists],
			}
		default:
			return state
	}
}