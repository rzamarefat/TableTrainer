import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { chooseLayerType, setModelLayers } from '../redux/actions';
import InputGroup from 'react-bootstrap/InputGroup';

const NewLayer = () => {
    const chosenLayerType = useSelector(state => state.chosenLayerType)

    const dispatch = useDispatch()


    const handleAddClick = () => {
        dispatch(setModelLayers(chosenLayerType))

    }

  return (
    <>
        <h4>
            Add a layer
        </h4>
        <div className="btn-group d-flex flex-column">
            
            <Dropdown>
            <label className='mr-5  '>layer</label>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    {chosenLayerType}
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1" onClick={() => dispatch(chooseLayerType("Dense"))}>
                        Dense
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1" onClick={() => dispatch(chooseLayerType("Conv1D"))}>
                        Conv1D
                    </Dropdown.Item>


                    <Dropdown.Item href="#/action-1" onClick={() => dispatch(chooseLayerType("BatchNorm"))}>
                        BatchNorm
                    </Dropdown.Item>


                    <Dropdown.Item href="#/action-1" onClick={() => dispatch(chooseLayerType("AvgPool"))}>
                        AvgPool
                    </Dropdown.Item>

                    <Dropdown.Item href="#/action-1" onClick={() => dispatch(chooseLayerType("MaxPool"))}>
                        MaxPool
                    </Dropdown.Item>

                    <Dropdown.Item href="#/action-1" onClick={() => dispatch(chooseLayerType("Flatten"))}>
                        Flatten
                    </Dropdown.Item>
                </Dropdown.Menu>
                
            </Dropdown>

            
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