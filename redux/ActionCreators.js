import * as ActionCreators from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchComments = () => (dispatch) = {
	return fetch(baseUrl + 'comments')
	.then(response => {
		if (response.ok) {
			return response;
		}else {
			var error = new Error('Error' + response.status + ': ' +response.statusText);
			error.response = response;
			throw error;
		}
	},
	error => {
		var errmess = new Error(error.message);
		throw errmess;
	})
	.then(response => response.json())
	.then(comments => dispatch(addComments(comments)))
	.catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
	type: ActionTypes.COMMENTS_FAILED,
	payload: errmess
});

export const addComments = (comments) => ({
	type: ActionTypes.ADD_COMMENTS,
	payload: comments
});

export const fetchDishes = () => (dispatch) = {
	dispatch(dishesLoading());

	return fetch(baseUrl + 'dishes')
	.then(response => {
		if (response.ok) {
			return response;
		}else {
			var error = new Error('Error' + response.status + ': ' +response.statusText);
			error.response = response;
			throw error;
		}
	},
	error => {
		var errmess = new Error(error.message);
		throw errmess;
	})
	.then(response => response.json())
	.then(dishes => dispatch(addComments(dishes)))
	.catch(error => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
	type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
	type: ActionTypes.DISHES_FAILED,
	payload: errmess
});

export const addDishes = (dishes) => ({
	type: ActionTypes.ADD_DISHES,
	payload: dishes
});


export const fetchPromos = () => (dispatch) = {
	dispatch(promosLoading());

	return fetch(baseUrl + 'promotions')
	.then(response => {
		if (response.ok) {
			return response;
		}else {
			var error = new Error('Error' + response.status + ': ' +response.statusText);
			error.response = response;
			throw error;
		}
	},
	error => {
		var errmess = new Error(error.message);
		throw errmess;
	})
	.then(response => response.json())
	.then(dishes => dispatch(addPromos(dishes)))
	.catch(error => dispatch(promosFailed(error.message)));
};

export const promosLoading = () => ({
	type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
	type: ActionTypes.PROMOS_FAILED,
	payload: errmess
});

export const addPromos = (promos) => ({
	type: ActionTypes.ADD_PROMOS,
	payload: promos
});


export const fetchLEaders = () => (dispatch) = {
	dispatch(leadersLoading());

	return fetch(baseUrl + 'leaders')
	.then(response => {
		if (response.ok) {
			return response;
		}else {
			var error = new Error('Error' + response.status + ': ' +response.statusText);
			error.response = response;
			throw error;
		}
	},
	error => {
		var errmess = new Error(error.message);
		throw errmess;
	})
	.then(response => response.json())
	.then(dishes => dispatch(addLeaders(dishes)))
	.catch(error => dispatch(leadersFailed(error.message)));
};

export const leaderssLoading = () => ({
	type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
	type: ActionTypes.LEADERS_FAILED,
	payload: errmess
});

export const addLeaders = (leaders) => ({
	type: ActionTypes.ADD_LEADERS,
	payload: leaders
});
