import React from 'react'
import { Container, Col , Card, Row } from 'react-bootstrap'


export default function Teams({ teams }) {
    const  nfc  = []
    const  afc  = []
    const sortConf = [...teams].map((team) => {
    team.conf === 'AFC' ? afc.push(team) : nfc.push(team) 
    })
  
    // function handleClick() {
    //   return (
    //     <Card.Text>
    //       {this.record}
    //     </Card.Text>
    //   )
    // }
  
    return (
        <>
          <Container fluid >
          <Row>
                    <img className='mt-4 mx-auto d-block' src='./afc.png' style={{width: '10rem'}}></img>
                    <h1 className='mt-4 text-center'>AFC DIVISION</h1>
            {afc?.map((team, i) => {
                    return (
                      <Col key={i}>
                        <Card className='text-center py-4 my-4' style={{ width: '18rem' }}>
                            <Card.Img alt='' className='mx-auto d-block' style={{height: '7rem' }} src={team.logoSrc}/>
                                <Card.Body>
                                <Card.Title >{team.city} {team.name}</Card.Title>
                                <Card.Text>
                              {team.conf} {team.div}
                                </Card.Text>
                              <h2>{team.record}</h2>  
                            </Card.Body>
                            </Card>
                        </Col>)
                })}
                </Row>
          <Row>
                    <img className='mt-4 mx-auto d-block' src='./nfc.png' style={{width: '10rem'}}></img>
                    <h1 className='mt-4 text-center'>NFC DIVISION</h1>
                {nfc?.map((team, i) => {
                    return (
                        <Col key={i}>
                        <Card className='text-center py-4 my-4' style={{ width: '18rem' }}>
                          <Card.Img alt="" className='mx-auto d-block' style={{height: '7rem' }} src={team.logoSrc}/>
                                <Card.Body>
                                <Card.Title>{team.city} {team.name}</Card.Title>
                                <Card.Text>
                              {team.conf} {team.div}  
                            </Card.Text>
                            <h2>{team.record}</h2>
                            </Card.Body>
                            </Card>
                        </Col>)
                })}
                </Row>
        </Container> 
        </>
    )
}
