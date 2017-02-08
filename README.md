# FetchAction
Quickly create AJAX action tool

## install
`npm install fetch-action --save`
## 安装
`npm install fetch-action --save`

## Usage
```javascript
import createFetchAction from 'fetch-action';
const API = '';
const GET_USER_OK = 'GET_USER_OK';
export const getUserOK = (rst)=>{return {type: 'GET_USER_OK', payload: rst}};
export const getUser = createFetchAction(`${API}/user`, {successAction: getUserOK});
```

## 使用
