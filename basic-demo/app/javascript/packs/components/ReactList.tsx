import * as React from 'react';

interface IMessage {
    id: number;
    user: string;
    message: string;
    created_at: Date;
}

interface IMessageState {
    messages: Array<IMessage>;
}

interface IMessageProps {
    all_messages_path : string;
}

export default class ReactList extends React.Component<IMessageProps, IMessageState>
{
    constructor(props:IMessageProps)
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
        fetch(this.props.all_messages_path).then(this.successCallback, this.failureCallback);   // drops errors by default, ok for this usecase
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
        throw new Error('call to ' + this.props.all_messages_path + ' unsuccessful');
    }


    render ()
    {
        var messages = this.state as IMessageState;

        if(messages == null || messages.messages == null)
            return('');


        var list = messages.messages.map(x=>{
                    var time = new Date(x.created_at).toLocaleDateString('en-US');

                    return(
                        <p key={x.id}>
                            {x.user}:<br/>
                            {x.message} - {time}
                        </p>
                    )
                }
            );

        return(
            <React.Fragment>
                {list}
            </React.Fragment>
        );
    }

}