import { put,takeEvery, all } from 'redux-saga/effects';

let delay =(user)=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(user)
    },3000)
})
function* wait_for_validate(user){
    let mes=yield delay(user)
    yield put({type:'logined',mes})
}
function* watchLogin(){
    yield takeEvery('login',wait_for_validate)
}
export default function* rootSaga(){
    yield all([
        watchLogin()
    ])
}