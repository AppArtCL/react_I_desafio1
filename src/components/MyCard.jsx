import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Tags from './Tags'

const MyCard = ({imagen, nombre, descripcion, raza, color}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
      </Card.Body>
      <Tags raza={raza} color={color} />
    </Card>
  );
};
  
export default MyCard