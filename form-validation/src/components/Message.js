import React from 'react';

const Message = (props) => {

    return (
        <div>
            <h3 className="text-center message">{props.value}</h3>
        </div>
    )
}

export default Message;
