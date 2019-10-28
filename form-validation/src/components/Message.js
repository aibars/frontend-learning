import React from 'react';

const Message = (props) => {
    let message = props.formComplete ? 'Form is Complete!' :
        'Form is Incomplete';
    return (
        <div>
            <h3 className={"text-center " + (props.formComplete ? 'message-complete' :
                'message-incomplete')}>{message}</h3>
        </div>
    )
}

export default Message;
