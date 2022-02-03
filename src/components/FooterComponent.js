import React, { Component } from 'react';


function Footer(props) {
    return (
        <footer className='site-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 col-sm-2 offset-1'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='col-6 col-sm-3 text-center'>
                        <h5>Social</h5>
                        <i className='bi bi-instagram' />
                        <i className='bi bi-facebook' />
                        <i className='bi bi-twitter' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer