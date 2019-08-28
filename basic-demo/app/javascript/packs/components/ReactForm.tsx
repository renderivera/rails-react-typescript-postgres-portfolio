import * as React from 'react';

interface IFormProps {
    post_to_path : string;
}

interface IFormState {
    user : string;
    message : string;
}

export default class ReactForm extends React.Component<IFormProps, IFormState>
{    
    constructor(props:any){
        super(props);

        this.handleChangeUser = this.handleChangeUser.bind(this); // needed to be able to call this.; react team says that's the most performant way
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            user: '',
            message: ''
          };
    }
    
    handleChangeUser(event:any){
        this.setState({user: event.target.value });
    }
    handleChangeMessage(event:any){
        this.setState({message: event.target.value });
    }

    handleSubmit(event:any){
        console.log('submitting');

        event.preventDefault();
        
        var newMessage = {message: {user: this.state.user, message: this.state.message}};
        let json = JSON.stringify(newMessage);

        console.log(json);

        fetch(this.props.post_to_path, {
            method: 'post',
            body: json,
            headers: { 'Content-type': 'application/json' }
           })
           .then(this.successCallback, this.failureCallback);  
    
    }

    async successCallback (response:Response)
    {
        console.log('success');

        var json = await response.json();
        alert('message was created successfully.' + json);
    }

    failureCallback (response:Response)
    {
        throw new Error('call to ' + this.props.post_to_path + ' unsuccessful');
    }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <input name="user" type="text" onChange={this.handleChangeUser} placeholder="enter your name"/>
                    <br/>
                    <input name="message" type="text" onChange={this.handleChangeMessage} placeholder="enter your message"/>
                </p>

                <input type="submit"/>
            </form>
        );
    }
}