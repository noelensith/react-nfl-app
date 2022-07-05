import React, { useState } from 'react'
import Axios from 'axios'
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap'

export default function Contact() {
    const url = "http://localhost:3000/QUESTION"
    const [questionAsked, setQuestionAsked] = useState({
        
    })

    function submit(e) {
        let data = JSON.stringify({
            Question: questionAsked.question
        })
        e.preventDefault();
        Axios.post(url, data
        ).then(res => console.log(res.questionAsked)).catch(err => (console.log(err)))
    }

    function handle(e) {
        const newData = { ...questionAsked };
        newData[e.target.id] = e.target.value
        setQuestionAsked(newData)
        console.log(newData)
    }
    return (
        <>
            <div className='justify-content-center'>
                <h1 className='text-center'>Got Questions?</h1>
                <h3 className='text-center'>Ask a question below</h3>
                <Form onSubmit={(e) => submit(e)}>
                <InputGroup >
                    <InputGroup.Text>Question: </InputGroup.Text>
                    <FormControl onChange={(e) => handle(e)} id="question" value={questionAsked.question} type="text" />
                    <Button type='submit' variant="outline-secondary">Submit</Button>
                </InputGroup>
                </Form >

            </div>
        </>
  )
}
