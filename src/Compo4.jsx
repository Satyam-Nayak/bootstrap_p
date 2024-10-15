import Carousel from 'react-bootstrap/Carousel';

function Compo4() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:"100vh", width:"200vw"}}
          className="d-block w-100"
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/06/robin-smiling-in-wano-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"100vh", width:"200vw"}}
          className="d-block w-100"
          src="https://motionbgs.com/media/1953/monkey-d-luffy-straw-hat2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"100vh", width:"200vw"}}
          className="d-block w-100"
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/01/roronoa-zoro.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Compo4;