import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

const persons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function UsersListing() {

    const renderPerson = (person, idx) => <div className="my-2 p-15 person-item bg-white d-flex justify-content-start" key={idx}>
        <div className="person-item-image-container">
            <Image className="w-100" src="https://www.playbookux.com/wp-content/uploads/2016/06/guy.png" />
        </div>
        <div className="px-15 flex-1 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between">
                <b>Person Name</b>
                <small className="text-muted">05:30 pm</small>
            </div>
            <Row>
                <Col sm={10}>
                    <p className={`text-muted mb-0 ${(idx == 1 || idx == 4 || idx == 5) && 'font-weight-bold'}`}>Praesent sapien massa, convallis...</p>
                </Col>
                <Col sm={2}>
                    {(idx == 1 || idx == 4 || idx == 5) && <div className="new-message"></div>}
                </Col>
            </Row>
        </div>
    </div>

    return (
        <div className="persons-container">
            {persons.map((person, idx) => renderPerson(person, idx))}
        </div>
    )
}
