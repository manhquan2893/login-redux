import React, { Component } from 'react'
import {connect} from 'react-redux'

const mapStateToProps=(state)=>({
  username:state.auth.username,
  password:state.auth.password,
  success:state.auth.success,
  error:state.auth.error
})
const mapDispatchToProps=(dispatch)=>({
  onChangeUsername:(value)=>
    dispatch({type:'update_filed_auth',key:'username',value:value}),
  onChangePassword:(value)=>
    dispatch({type:'update_filed_auth',key:'password',value:value}),
  onLogin:(username,password)=>
    {
      dispatch({type:'login',user:{username,password}})
    }
})
export class App extends Component {
  constructor(){
    super()
    this.changeUsername=(e)=>{this.props.onChangeUsername(e.target.value)}
    this.changePassword=(e)=>{this.props.onChangePassword(e.target.value)}
    this.login=(username,password)=>(ev)=>{
      ev.preventDefault()
      this.props.onLogin(username,password)
  } 
  }
  render() {
    let username=this.props.username
    let password=this.props.password
    return (
      <div className="col-md-6">
          {this.props.success?(
            <div className="alert alert-primary">
              Login successfully
            </div>
          ):null}
          {this.props.error?(
            <div className="alert alert-warning">
              Username or password is not valid
            </div>
          ):null}
        <form >
          <div className="form-group">
            <input type="text" className="form-control" placeholder="username"
            onChange={this.changeUsername}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="password"
            onChange={this.changePassword}/>
          </div>
          <button onClick={this.login(username,password)}>Login</button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

