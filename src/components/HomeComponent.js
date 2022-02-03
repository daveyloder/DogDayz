import React, { Component } from 'react';



class Home extends Component {
    render(){
        return(
            <React.Fragment>
            <div className='p-5 bg-dark text-white'>
                <div className='container text-center'>
                    <div className='row'>
                        <div className='col'>
                            <h1>DogDayz</h1>
                            <h2>Every day is a dog day</h2>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Home