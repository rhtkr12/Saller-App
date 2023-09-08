import React from 'react'
import footer from '../styles/footer.module.css'
import { Col, Row } from 'reactstrap'

const Footer = () => {
    return (
        <Row className={`${footer.footer} m-0`}>
            <Col className={footer.footerText}>
                <span>&#169; Piggibag All Rights Reserved.</span>
            </Col>
        </Row>
    )
}

export default Footer