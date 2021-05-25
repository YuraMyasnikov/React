import React from 'react';
import {clickMessageCreator, updateMessageCreator} from "../../../redux/messanger-reducer";
import Messanger from "./Messanger";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {connect} from "react-redux";

/*const MessangerContainer = (props) => {
    console.log("messengerContainer",props);

    let changeMessage = (param)=>{
        props.dispatch(updateMessageCreator(param))
    }
    let clickMessage = () =>{
        props.dispatch(clickMessageCreator(newSimvol))
        props.state.newMessage = '';
    }
    let newSimvol = props.state.newMessage;

    let dialogs = props.state.dialogsData.map( (person) => {
        return  <Dialog name={person.name} id={person.id} img={person.img}/>
    } )
    let messages = props.state.messagesData.map( (message) => {
        return <Message message={message.name} />;
    } )

    return (
        <Messanger click={clickMessage} change={changeMessage} value={newSimvol} dialogs={dialogs} messages={messages} />
    );
}*/

const mapStateToProps = (state)=>{
    console.log('YYY', state)
    return{
        value: state.messenger.newMessage,
        messagesData: state.messenger.messagesData,
        dialogsData: state.messenger.dialogsData,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        changeMessage: (param)=>{
            dispatch(updateMessageCreator(param))
        },
        clickMessage: (newSimvol)=>{
            dispatch(clickMessageCreator(newSimvol))
        }
    }
}


const MessangerContainer = connect(mapStateToProps, mapDispatchToProps)(Messanger)

export default MessangerContainer;