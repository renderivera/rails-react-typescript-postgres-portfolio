import * as React from 'react';

export default class ReactForm extends React.Component
{    
    constructor(props:any){
        super(props);

        this.state = {
            user: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this); // needed, to be able to call this.setState
    }
    
    handleChange(event:any){
        var element = event.target;
        var value = event.target.value;

        this.setState({
            [element]: value
        });
    }

    handleSubmit(event:any){
        event.preventDefault();
        console.log(event);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="user" type="text" onChange={this.handleChange}/>
                <input name="message" type="text" onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        );
    }
}