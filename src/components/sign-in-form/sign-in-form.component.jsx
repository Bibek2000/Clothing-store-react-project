import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import '../button/button.component';
import Button from "../button/button.component";

const defaultFormField = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const {email, password} = formFields;

    const resetFormField = () => {
        setFormFields(defaultFormField);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user); 
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormField();
        }catch(error){
            switch(error.code){
                case 'auth/user-not-found':
                    alert('The entered email doesnot exist');
                    break;
                case 'auth/wrong-password':
                    alert('Cannot sign in. The entered password is incorrect.');
                    break;
                default:
                    console.log(error);
            }
            
        }
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle} >Google Sign In</Button>
                </div>
            </form> 
        </div>
    )
}

export default SignInForm;