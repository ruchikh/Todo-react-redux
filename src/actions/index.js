export function addTodo(dataObj) {
	return {
		data: dataObj,
		type: 'ADD_TODO',
	}
}

export function removeTodo(id) {
	return {
		id,
		type: 'REMOVE_TODO',
	}
}

export function updateTodo(data) {
	return {
		data,
		type: 'UPDATE_TODO',
	}
}