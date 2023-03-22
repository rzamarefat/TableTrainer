import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { setCurrentDenseLayer } from '../redux/actions';


const Dense = () => {
    const dispatch = useDispatch()

    const [units, setUnits] = useState(0);
    const [inputShape, setInputShape] = useState(0);
    const [activation, setActivation] = useState(0);

    const [isConfigFull, setIsConfigFull] = useState(false)

    useEffect(()=>{
        if (units && inputShape && activation) {
                setIsConfigFull(true)
        }
        

        if (isConfigFull){
                dispatch(setCurrentDenseLayer({
                        units,
                        inputShape,
                        activation
                    }))
                setUnits(0)
                setInputShape(0)
                setActivation(false)
                setIsConfigFull(false)
        }
        
    })

  return (
    <Form>
                <div className="d-flex flex-column">
                    <label className=''>Units</label>
                    <input type="number" name="myRadio" value={units} onChange={(e)=>setUnits(parseInt(e.target.value))} min="0" />
                </div>
                <div className="d-flex flex-column">
                    <label className=''>Input shape</label>
                    <input type="number" name="myRadio" value={inputShape} onChange={(e) => setInputShape(parseInt(e.target.value))} />
                </div>

                <div className="d-flex flex-column">
                <label className=''>Activation</label>
                <Form.Check
                        inline
                        label="elu"
                        name="activation-group"
                        type="radio"
                        id="elu"
                        onChange={() => setActivation("elu")}
                />
                <Form.Check
                        inline
                        label="relu"
                        name="activation-group"
                        type="radio"
                        id="relu"
                        onChange={() => setActivation("relu")}
                />
                <Form.Check
                        inline
                        label="sigmoid"
                        name="activation-group"
                        type="radio"
                        id="sigmoid"
                        onChange={() => setActivation("sigmoid")}
                />
                <Form.Check
                        inline
                        label="softmax"
                        name="activation-group"
                        type="radio"
                        id="softmax"
                        onChange={() => setActivation("softmax")}
                />
                <Form.Check
                        inline
                        label="tanh"
                        name="activation-group"
                        type="radio"
                        id="tanh"
                        onChange={() => setActivation("tanh")}
                />
                <Form.Check
                        inline
                        label="linear"
                        name="activation-group"
                        type="radio"
                        id="linear"
                        onChange={() => setActivation("linear")}
                />
                </div>
                
                
    </Form>
  )
}

export default Dense