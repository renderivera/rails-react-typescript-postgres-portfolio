import * as React from 'react';
import { IMessage } from './IMessage';
import { IComponentProps } from './IComponentProps';
import { IMessages } from './IMessages';

export default class ReactList extends React.Component<IComponentProps, IMessages>
{
    constructor(props:IComponentProps)
    {
        super(props);
        this.successCallback = this.successCallback.bind(this); // binding is needed to access state in the callback
    }

    timer:any;

    componentDidMount()
    {
        this.fetchMessages();
        this.timer = setInterval(() => this.fetchMessages(), 5000);
    }

    fetchMessages()
    {
        fetch(this.props.fetch_data_api_path).then(this.successCallback, this.failureCallback);   // drops errors by default, ok for this usecase
    }

    async successCallback (response:Response)
    {
        var json = await response.json();

        var messagesResponse = json as Array<IMessage>;
        if(messagesResponse == null){
            throw new Error('Unexpected Format'); // casting unsuccessfull, should never be called
        }

        this.setState({messages: messagesResponse});
    }

    failureCallback (response:Response)
    {
        // todo: define error handling behaviour with stakeholders
        throw new Error('call to ' + this.props.fetch_data_api_path + ' unsuccessful');
    }


    render ()
    {
        var messages = this.state as IMessages;

        if(messages == null || messages.messages == null)
            return('');


        var list = messages.messages.map(x=>{
                    var time = new Date(x.created_at).toLocaleDateString('en-US');

                    return(
                        <li key={x.id} className="messageContainer">
                            <div className="grid user">{x.user}</div>
                            <div className="grid message">{x.message}</div>
                            <div className="grid time">{time}</div>
                        </li>
                    )
                }
            );

        return(
            <ul className="allMessagesList">
                {list}
            </ul>
        );
    }

}