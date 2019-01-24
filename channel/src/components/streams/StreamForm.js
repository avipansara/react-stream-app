import React from "react";
import { Field, reduxForm } from 'redux-form';



class StreamForm extends React.Component {
    
    renderError({touched, error}) { //remember: these parameters are meta property
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    // renderInput(formProps) {
    //     //console.log(formProps);
    //     return <input 
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value} />
    // }

        renderInput = ({ input, label, meta }) => {
            //console.log({input});
            return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
            {this.renderError(meta)}
            </div>
        )}
    
    onSubmit = (formInput) => {
        this.props.onSubmit(formInput);
    }

    render() {

        return (
        <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} //handleSubmit is one of the redux-form propertiess
         className="ui form error">
            <Field name="title" component={this.renderInput} label="Enter Title" />
            <Field name="description" component={this.renderInput} label="Enter Description" />
            <button className="ui button primary">Submit</button>
        </form>
        )
    }
}

const validate = (formValues) => {
    //console.log(formValues);
    const errors = {};

    if(!formValues.title) {
        errors.title = "you must enter a title";
    }

    if(!formValues.description) {
        errors.description = "you must enter a description";
    }

    return errors;
} 


export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);

