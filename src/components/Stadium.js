import React from 'react'
import { Card, Image, Col, Container, Row } from 'react-bootstrap'


export default function Stadium({ teams }) {
    const stadiums = teams.map((team, i) => {
        return (
            <Col>
                <Card style={{width:"25rem"}} className='mx-auto py-4 my-4' >
                <Image className="d-block mx-auto" style={{width: '15rem', height: '9rem'}} src={team.stadium.stadiumSrc} rounded/>
                <h5 className="text-center">{team.stadium.name} <br></br>Home of the {team.city} {team.name}</h5> 
                </Card>
            </Col>
        )
    })
    return (
      <Container className="justify-content-md-center" fluid>
        <Row>{stadiums}</Row>
      </Container>

  )
}
