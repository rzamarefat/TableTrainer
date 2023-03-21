import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { chooseLayerType } from '../redux/actions';

const NewLayer = () => {
    const chosenLayerType = useSelector(state => state.chosenLayerType)
    const dispatch = useDispatch()

  return (
    <>
        <h4>
            Add a layer
        </h4>
        <div className="btn-group d-flex align-items-center">
            <label className='m-4'>layer</label>
            <Dropdown>
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
        </div>
    </>
  )
}

export default NewLayer