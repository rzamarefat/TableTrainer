import React from 'react'
import Form from 'react-bootstrap/Form';


const Dense = () => {
  return (
    <Form>
                <div className="d-flex flex-column">
                    <label className=''>Units</label>
                    <input type="number" name="myRadio" value="option1" />
                </div>
                <div className="d-flex flex-column">
                    <label className=''>Input shape</label>
                    <input type="number" name="myRadio" value="option1" />
                </div>

                <div className="d-flex flex-column">
                <label className=''>Activation</label>
                <Form.Check
                        inline
                        label="elu"
                        name="elu"
                        type="radio"
                        id="elu"
                />
                <Form.Check
                        inline
                        label="relu"
                        name="relu"
                        type="radio"
                        id="relu"
                />
                <Form.Check
                        inline
                        label="sigmoid"
                        name="sigmoid"
                        type="radio"
                        id="sigmoid"
                />
                <Form.Check
                        inline
                        label="softmax"
                        name="softmax"
                        type="radio"
                        id="softmax"
                />
                <Form.Check
                        inline
                        label="tanh"
                        name="tanh"
                        type="radio"
                        id="tanh"
                />
                <Form.Check
                        inline
                        label="linear"
                        name="linear"
                        type="radio"
                        id="linear"
                />
                </div>
                
                
    </Form>
  )
}

export default Dense