# FetchAction
Quickly create AJAX action tool

## install 安装
`npm install fetch-action --save`

## Usage 使用

### Basic 基础使用

```javascript
import {createStore} from 'redux';
import createFetchAction from 'fetch-action';

const API = '';

// Define actions 定义操作

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
```
### Use [redux-act](https://github.com/pauldijou/redux-act) 使用 [redux-act](https://github.com/pauldijou/redux-act) 简化

```javascript
import {createStore} from 'redux';
import { createAction, createReducer } from 'redux-act';
import createFetchAction from 'fetch-action';

const API = '';

// Define actions, 定义操作
const getUserOK = createAction('get user success');
const getUser = createFetchAction(`${API}/user`, {successAction: getUserOK});

// Define reducer, 定义 reducer
const reducer = createReducer({
	[getUserOK]:(state, user)=>({...state, user})
});

// Generate data, 生成数据
const user = createStore(reducer);

// Perform the operation, 执行操作
user.dispatch(getUser());

```