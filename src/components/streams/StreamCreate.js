import React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
    renderInput = ({input, label}) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }
    onSubmit = (formValues) => {
        console.log(formValues);
    }
    render() {
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component = {this.renderInput} label="Enter Description"/>
                <button className="ui button primary" >Submit</button>
            </form>
        ) 

    };
};

export default reduxForm({
    form: 'createsStream'
})(StreamCreate);