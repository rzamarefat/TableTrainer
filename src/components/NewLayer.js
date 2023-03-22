import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';

import { chooseLayerType, setCurrentDenseLayer, setModelLayers } from '../redux/actions';
import Form from 'react-bootstrap/Form';
import Dense from './Dense';
import Conv1D from './Conv1D';
import BatchNorm from './BatchNorm';
import Flatten from './Flatten'
import AvgPool from './AvgPool'
import MaxPool from './MaxPool';


const NewLayer = () => {
    const chosenLayerType = useSelector(state => state.chosenLayerType)
    const currentDenseState = useSelector(state => state.currentDenseState)


    const dispatch = useDispatch()


    const handleAddClick = () => {
        dispatch(setModelLayers({
            "chosenLayerType": chosenLayerType,
            "id": Date.now().toString(36) + Math.random().toString(36).substr(2),
            "layerConfig": currentDenseState
        }))
        dispatch(setCurrentDenseLayer(null))    
    }

  return (
    <>
        <h4>
            Add a layer
        </h4>
        <hr/>

        <div className="d-flex flex-column">
            
            <h6 className='mb-1'>Layer Type</h6>
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
                        label="Flatten"Desne
                        name="group1"
                        type="radio"
                        id="Flatten"
                        checked={chosenLayerType === "Flatten"}
                        onChange={() => dispatch(chooseLayerType("Flatten"))}            
                />
            </Form>
            <hr/>

            
            <h6 className='mb-1'>Layer Config</h6>
            {chosenLayerType === "Dense" && <Dense />}
            {chosenLayerType === "Conv1D" && <Conv1D />}
            {chosenLayerType === "BatchNorm" && <BatchNorm />}
            {chosenLayerType === "AvgPool" && <AvgPool />}
            {chosenLayerType === "MaxPool" && <MaxPool />}
            {chosenLayerType === "Flatten" && <Flatten />}


        </div>
        <hr/>


        <Button variant="dark w-100" onClick={() => handleAddClick()} disabled={
            !currentDenseState
        }>Add</Button>
        
        
    </>
  )
}

export default NewLayer