import React from 'react'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="layout px-3">
                {children}
            </div>
        </>
    )
}
