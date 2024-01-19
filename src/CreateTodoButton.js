const CreateToDOButtonStyle = {
    background:' #33310a',
    height: '75px',
    width: '75px',
    border: 'none',
    fontSize: '35px',
    padding: '0px',
    color: '#fff',
    borderRadius: '50px',
    position: 'fixed',
    bottom: 0,
    marginBottom: '12px',
}

function CreateTodoButton (){
    return(
        <button style={CreateToDOButtonStyle}>+</button>
    );
}

export {CreateTodoButton}