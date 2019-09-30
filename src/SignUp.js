import React from 'react'

class SignUp extends React.Component{
    render(){
        return (
            <div>
              <form>
                <br/>
                <div>
                  <input type="text" name="username" placeholder="Username"/>
                  <label htmlFor="username">Username</label>
                </div>
                <div>
                  <input type="passowrd" name="password" placeholder="Password"/>
                  <label htmlFor="password">Password</label>
                </div>
                <input type="submit" value="Sign Up"/>
              </form>
            </div>
        )
    }
}

export default SignUp