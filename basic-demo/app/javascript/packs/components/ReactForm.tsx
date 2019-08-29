import * as React from 'react';
import { IMessage } from './IMessage';
import { IComponentProps } from './IComponentProps';

export default class ReactForm extends React.Component<IComponentProps, IMessage>
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

    async handleSubmit(event:any){
        console.log('submitting');

        event.preventDefault();
        
        var newMessage = {message: {user: this.state.user, message: this.state.message}};
        var json = JSON.stringify(newMessage);

        console.log(json);

        try
        {
            await fetch(this.props.fetch_data_api_path, {
                method: 'post',
                body: json,
                headers: { 'Content-type': 'application/json' }
               })
               .then(this.successCallback, this.failureCallback);  
        }
        catch(error)
        {
            //define error handling with stakeholders; ignore for now
            throw new Error(error);
        }
    
    }

    async successCallback (response:Response)
    {
        await response.json();
        console.log('success');
    }

    async failureCallback (response:Response)
    {
        throw new Error(await response.text());
    }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>                
                <input className="grid user" name="user" type="text" placeholder="enter your name" onChange={this.handleChangeUser}/>
                <input className="grid message" name="message" type="text" placeholder="enter your message" onChange={this.handleChangeMessage}/>
                <input className="grid" name="submitButton" type="submit"/>
            </form>
        );
    }
}