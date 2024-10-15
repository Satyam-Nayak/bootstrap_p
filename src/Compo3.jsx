import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function Compo3() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://motionbgs.com/media/1953/monkey-d-luffy-straw-hat2.jpg" />
      <Card.Body>
        <Card.Title>Monkey D. Luffy</Card.Title>
        <Card.Text>
        Meat! I'm gonna eat all the meat in the world! Who wants to join me?
        </Card.Text>
        <Button variant="primary">One Piece</Button>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/01/roronoa-zoro.jpg" />
      <Card.Body>
        <Card.Title>Zoro</Card.Title>
        <Card.Text>
        Just get out of my way, you meathead. I need to practice my swordsmanship.
        </Card.Text>
        <Button variant="primary">One Piece</Button>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2023/06/sanji-vinsmoke.jpg" />
      <Card.Body>
        <Card.Title>Sanji</Card.Title>
        <Card.Text>
        Calm down, Usopp. It's probably just a little fish. Besides, I'll protect you, Nami-san.
        </Card.Text>
        <Button variant="primary">One Piece</Button>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/06/robin-smiling-in-wano-1.png" />
      <Card.Body>
        <Card.Title>Nico Robin</Card.Title>
        <Card.Text>
        It's best to stay calm and assess the situation. We can probably handle whatever comes our way.
        </Card.Text>
        <Button variant="primary">One Piece</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Compo3;