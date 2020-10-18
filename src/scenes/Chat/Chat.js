import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ChatTabs from '../../components/ChatTabs'
import RecieverHeader from '../../components/RecieverHeader'

export default function Chat() {
    return (
        <Row className="h-100 mt-1">
            <Col lg={3} md={6} sm={12} className="d-flex flex-column p-0 bg-light chat-section">
                <ChatTabs />
            </Col>
            <Col lg={6} md={6} className="d-flex flex-column p-0 chat-section">
                <RecieverHeader />
                {/* <RecieverBody /> */}
                <div className="px-15 reciever-body">

                </div>
            </Col>
            <Col lg={3} md={12} className="d-flex flex-column p-0 chat-section">
                {/* <NotificationsHeader /> */}
                {/* <NotificationsBody /> */}
                <div className="h80 d-flex align-items-center box-shadow-bottom">
                    <div className="px-15">
                        <h3 className="font-weight-bold">Other Section</h3>
                    </div>
                </div>
                <div className="p-15 bg-light flex-1">
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                    <div className="text-muted">other section</div>
                </div>
            </Col>
        </Row>
    )
}
