import './TodoCounter.css'
const estilos ={
  fontSize: '24px',
  textAlign: 'center',
  margin: '0px',
  padding: '48px',
  fontFamily: 'Montserrat',
  color: '#ffff',
  fontWeight: 'bolder',
}

function TodoCounter({total, completed}) {
    return (
      <h2 style={estilos}>
        Has completado {completed} de {total} ToDos
      </h2>
      );
  }

  export { TodoCounter}