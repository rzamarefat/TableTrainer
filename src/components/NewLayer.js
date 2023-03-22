import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { chooseLayerType, setModelLayers } from '../redux/actions';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


const NewLayer = () => {
    const chosenLayerType = useSelector(state => state.chosenLayerType)

    const dispatch = useDispatch()


    const handleAddClick = () => {
        dispatch(setModelLayers({
            "chosenLayerType": chosenLayerType,
            "id": Date.now().toString(36) + Math.random().toString(36).substr(2)
        }))

    }

  return (
    <>
        <h4>
            Add a layer
        </h4>
        <div className="d-flex flex-column">
            
            <label className=''>Layer Type</label>
            <Form>
                <Form.Check
                        inline
                        label="Dense"
                        name="group1"
                        type="radio"
                        id="Dense"
                        checked={chosenLayerType === "Dense"}
                        onChange={() => dispatch(chooseLayerType("Dense"))}
                />
                <Form.Check
                        inline
                        label="Conv1D"
                        name="group1"
                        type="radio"
                        id="Conv1D"
                        checked={chosenLayerType === "Conv1D"}
                        onChange={() => dispatch(chooseLayerType("Conv1D"))}
                />
                <Form.Check
                        inline
                        label="BatchNorm"
                        name="group1"
                        type="radio"
                        id="BatchNorm"
                        checked={chosenLayerType === "BatchNorm"}
                        onChange={() => dispatch(chooseLayerType("BatchNorm"))}
                />
                <Form.Check
                        inline
                        label="AvgPool"
                        name="group1"
                        type="radio"
                        id="AvgPool"
                        checked={chosenLayerType === "AvgPool"}
                        onChange={() => dispatch(chooseLayerType("AvgPool"))}
                />
                <Form.Check
                        inline
                        label="MaxPool"
                        name="group1"
                        type="radio"
                        id="MaxPool"
                        checked={chosenLayerType === "MaxPool"}
                        onChange={() => dispatch(chooseLayerType("MaxPool"))}
                />
                <Form.Check
                        inline
                        label="Flatten"
                        name="group1"
                        type="radio"
                        id="Flatten"
                        checked={chosenLayerType === "Flatten"}
                        onChange={() => dispatch(chooseLayerType("Flatten"))}            
                />
            </Form>
            <hr/>
            <div className='d-flex flex-row mt-1'>
                <label className=''>Input shape</label>
                <input type="text" name="myRadio"/>
            </div>
            
            
        </div>
        <hr/>
        <Button variant="dark w-100" onClick={() => handleAddClick()}>Add</Button>
    </>
  )
}

export default NewLayer