import React from "react";
import './sign-up.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(email, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword:''
            });
        }
        catch(err) {
            console.log(err);
        }
    };

    handleChange = event => {
        const { value, name } = event.target; 

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        name= "displayName" 
                        type= "text" 
                        value= {displayName}
                        handleChange= {this.handleChange} 
                        label= "Display Name"
                        required 
                    />
                    <FormInput 
                        name= "email" 
                        type= "email" 
                        value= {email}
                        handleChange= {this.handleChange} 
                        label= "Email"
                        required 
                    />
                    <FormInput
                        name= "password" 
                        type= "password" 
                        value= {password} 
                        handleChange= {this.handleChange}
                        label= "Password"
                        required 
                    />
                    <FormInput
                        name= "confirmPassword" 
                        type= "password" 
                        value= {confirmPassword} 
                        handleChange= {this.handleChange}
                        label= "Confirm Password"
                        required 
                    />
                    
                    <CustomButton type="submit"> Sign Up </CustomButton>                  
                </form>
            </div>
        );
    }
}

export default SignUp;