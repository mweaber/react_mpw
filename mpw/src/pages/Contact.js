import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Contact.css'



const Contact = () => {

    return (
        <Container fluid>
            <div className="container mt-5">
                <h2>GET IN TOUCH</h2>
            </div>
            <Row className='ml-5 mt-5'>
                <Col md={6} style={{ fontSize: '13pt' }}>
                    <h5>You can get in touch with me through:</h5>
                    <p className='mt-3'>
                        Social:&nbsp;&nbsp;
                    <a href="https://github.com/mweaber" className='text-shadow-pop-top'>Github</a>&nbsp;
                    /&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/matthew-weaber/" className='text-shadow-pop-top'>LinkedIn</a>
                    </p>
                    <p>You can view my resume: &nbsp;
                        <a href="https://drive.google.com/file/d/1DZQRm60Fw1SGdg_ZDV7Qq9B0upPVHVJ6/view?usp=sharing" target="_blank" rel='noopener noreferrer' className='text-shadow-pop-top'>HERE</a>
                    </p>
                </Col>
                <Col md={6}>
                    <div>
                        <h5>Email:</h5>
                    </div>
                    <form id="contact-form" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact


// onSubmit={this.handleSubmit.bind(this)}