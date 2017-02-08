import {createStore} from 'redux';
import createFetchAction from 'fetch-action';

const API = '';

// Define actions, 定义操作

const GET_USER_OK = 'GET_USER_OK';
const getUserOK = (rst)=>{
	return {type: 'GET_USER_OK', payload: rst}
};
const getUser = createFetchAction(`${API}/user`, {successAction: getUserOK});

// Define reducer, 定义 reducer
const reducer = (state={}, action)=>{
	switch(action.type){
		case GET_USER_OK:
			const user = action.payload;
			return {
				...state,
				user
			};
		default: return state;
	}
};

// Generate data, 生成数据
const user = createStore(reducer);

// Perform the operation, 执行操作
user.dispatch(getUser());