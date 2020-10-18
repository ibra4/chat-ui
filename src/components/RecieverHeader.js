import React from 'react'
import { Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faPhone, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

export default function RecieverHeader() {
    return (
        <div className="h80 d-flex align-items-center box-shadow-bottom">
            <div className="reciever-header-left" />
            <div className="px-15 d-flex flex-1 justify-content-between align-items-center">
                <div className="reciever-image-container">
                    <Image className="w-100" src="https://www.playbookux.com/wp-content/uploads/2016/06/guy.png" />
                </div>
                <div className="px-15 flex-3">
                    <h3 className="font-weight-bold">Reciever Name</h3>
                </div>
                <div className="px-15 d-flex flex-1 justify-content-between">
                    <div className="hoverable-button">
                        <FontAwesomeIcon icon={faVideo} className="cascade" />
                    </div>
                    <div className="hoverable-button">
                        <FontAwesomeIcon icon={faPhone} className="cascade" />
                    </div>
                    <div className="hoverable-button">
                        <FontAwesomeIcon icon={faEllipsisV} className="cascade" />
                    </div>
                </div>
            </div>
            <div className="reciever-header-right" />
        </div>
    )
}
