import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { userActions } from '../actions/user.actions';

class CatererSignUp extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                isCaterer: true
            },
            submitted: false
        };
 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
 
    handleSubmit(event) {
        event.preventDefault();
 
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.email && user.password && user.isCaterer) {
            dispatch(userActions.register(user));
        }
    }
 
    render() {
        const { signingIn } = this.props;
        const { user, submitted } = this.state;
        return (
             <form id="caterer" className="formContent" onSubmit={this.handleSubmit}>
                <div className="row">
                     <div className="col-sm-12"> 
                    <h1>Caterer Sign Up</h1>
                        <small>Please fill in this form to create an account</small>
                    </div>
                    <hr/>
                    <p className="col-sm-6 col-xs-12"> 
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" placeholder="Enter First Name" name="firstName" value ={user.firstName} onChange={this.handleChange} required/>
                        {submitted && !user.firstName &&
                            <div className="help-block">First name is required</div>
                        }
                    </p>
                    <p className="col-sm-6 col-xs-12"> 
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" placeholder="Enter Last Name" name="lastName" value ={user.lastName} onChange={this.handleChange} required/>
                        {submitted && !user.lastName &&
                            <div className="help-block">Last name is required</div>
                        }
                    </p>  
                    <p className="col-sm-6 col-xs-12"> 
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Enter Username" name="username" value ={user.username} onChange={this.handleChange} required/>
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </p> 
                    <p className="col-sm-6 col-xs-12"> 
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Enter Email" name="email"  value ={user.email} onChange={this.handleChange} required/>
                        {submitted && !user.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </p> 
                    <p className="col-sm-6 col-xs-12">     
                        <label htmlFor="psw">Password</label>
                        <input type="password" placeholder="Enter Password" name="password"  value ={user.password} onChange={this.handleChange} required/>
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </p> 
                    <p className="col-sm-12">      
                        <label>
                        <input type="checkbox" name="remember" style={{'marginBottom':'15px'}}/> Remember me
                        </label>
                    </p>                      
                    <div className="col-sm-12 clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn">Sign Up</button>
                        {signingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>

                    <p className="col-sm-12 change_link">
                        Already a signed up?
                        <Link to="/signin">Sign in</Link>
                    </p>
                </div>
            </form>
      );
    }
}
function mapStateToProps(state) {
    const { registering } = state.authentication;
    return {
        registering
    };
}
 
const connectedSignUpPage = connect(mapStateToProps)(CatererSignUp);
export { connectedSignUpPage as CatererSignUp };