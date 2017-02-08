# FetchAction
Quickly create AJAX action tool

## install 安装
`npm install fetch-action --save`

## Usage 使用

### Basic, 基础使用

```javascript
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
```
### Use [redux-act](https://github.com/pauldijou/redux-act), 使用 [redux-act](https://github.com/pauldijou/redux-act) 简化

```javascript
import {createStore} from 'redux';
import { createAction, createReducer } from 'redux-act';
import createFetchAction from 'fetch-action';

const API = '';

// Define actions, 定义操作
const getUserOK = createAction('get user success| 获取用户成功');
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
### set POST/UPDATE/PATCH request 设置为POST/UPDATE/PATCH 请求

```javascript
import createFetchAction from 'fetch-action';

const addUsers = createFetchAction(url, {successAction: addUsersOK, method: 'POST'});
const updateUsers = createFetchAction(url, {successAction: updateUsersOK, method: 'UPDATE'});
const updateUsersX = createFetchAction(url, {successAction: updateUsersXOK, method: 'PATCH'});

addUsers(data);
updateUsers(data);
updateUsersX(data);

```

### Use restful api with pathname
```javascript
import createFetchAction from 'fetch-action';

const API = '';
const getUser = createFetchAction(`${API}/user/{{userID}}`, {successAction: getUserOK, method: 'POST'});

getUser({}, {userID: 'id'});

```

### Use interceptor, 使用拦截器过滤响应
```javascript
import {interceptor} from 'fetch-action';

const myInterceptor = (response) =>{
	const json = response.json();
	return json.data;
};

interceptor(myInterceptor);

```


### Use response result or error


## API

| API name | API 名称 |description | 描述 |
|------:|-------:|-------:|-------:|
| createFetchAction| | create fetch AJAX action | 创建 AJAX 异步操作|
| {interceptor}| | set response interceptor | 设置响应拦截器|

### createFetchAction params config

| config name | 配置参数名称 | 描述 | 备注|
|------:|-------:|-------:| -------:|
| url|  路径 | AJAX 请求的路径| restful api 的url中参数配置参考 [pathname](https://github.com/qingo/FetchAction#use-restful-api-with-pathname) 
|{successAction}| 请求成功操作 | 
|{failAction}| 请求成功操作 | 
|{method}| 请求方式 | 

