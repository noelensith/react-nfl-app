import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Container fluid >
        <Row className='justify-content-center'>
          <div>
            <h1 className="text-center">Home of the NFL</h1>
            <Image src='/home.jpg' className="img-fluid"></Image>
          </div>
        </Row>
      </Container>

    </>
  )
}
