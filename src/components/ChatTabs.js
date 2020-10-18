import React from 'react'
import { Nav, Tab, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faPhone, faEnvelope, faUsers, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import UsersListing from './UsersListing'

export default function ChatTabs() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="tabs" className="flex-nowrap justify-content-between align-items-center h80 bg-white box-shadow-bottom">
                <Nav.Item>
                    <Nav.Link eventKey="first">
                        <FontAwesomeIcon className="cascade fs-20" icon={faCommentAlt} />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">
                        <FontAwesomeIcon className="cascade fs-20" icon={faPhone} />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">
                        <FontAwesomeIcon className="cascade fs-20" icon={faEnvelope} />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="forth">
                        <FontAwesomeIcon className="cascade fs-20" icon={faUsers} />
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="font-weight-bold py-3 m-0 px-15 chat-listing-header">Chats</h2>
                <div className="plus-icon-button">
                    <FontAwesomeIcon className="plus-icon" icon={faPlus} />
                </div>
            </div>
            <div className="search-container py-2 px-15">
                <Form.Control name="searchString" placeholder="Search" />
                <div className="search-icon-container">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            <Tab.Content className="col">
                <Tab.Pane eventKey="first" className="h-100">
                    <UsersListing />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <div>second</div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <div>third</div>
                </Tab.Pane>
                <Tab.Pane eventKey="forth">
                    <div>forth</div>
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    )
}
