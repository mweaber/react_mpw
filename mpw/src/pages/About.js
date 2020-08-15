import React from 'react'
import Container from 'react-bootstrap/Container'

const About = () => {
    return (
        <Container className='mt-5'>
            <div className="row">
                <div className="col-md-4">
                    <h1>About Me</h1>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG07Uy1Dhjzlg/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=OeJDct0wZHmWd3i0bHfzKYkuwz_D6eGXGR1aUm5S2vo" alt="myself" className='mt-3' style={{borderRadius: '50px'}}/> 
                </div>
                <div className='col-md-4'>               
                    <h4>What is this all about?</h4>
                    <p className="mt-1">
                        Welcome. My name is Matthew Weaber and I am a front end web developer located in Central Florida. I am passionate about learning, hockey, and finding new opportunities to better myself.
                    </p>

                    
                </div>
                <div className="col-md-4">
                <h4 className='mt-2'>Skills</h4>
                    <p>What I like to work with: </p>
                    <ul style={{listStyle: 'none', fontWeight: 'bold'}}>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>MongoDB</li>
                    </ul>
                    <br/>
                    <p>What I am currently learning: </p>
                    <ul style={{listStyle: 'none', fontWeight: 'bold'}}>
                        <li>Angular</li>
                        <li>AWS</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
            </div>
           
        </Container>
    )
}

export default About
