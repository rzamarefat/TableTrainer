import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsFillXSquareFill } from 'react-icons/bs';
import { removeLayerFromModel } from '../redux/actions';



const ModelTree = () => {

    const dispatch = useDispatch()
    const modelLayers = useSelector(state => state.modelLayers)

  return (
    modelLayers.map(ml => {
        return (
            <>
            <div className='p-2 bg-dark text-light m-1 d-flex justify-content-between flex-row align-items-center w-100'>
                <BsFillXSquareFill style={{cursor: "pointer"}} onClick={() => dispatch(removeLayerFromModel(ml.id))}/>
                <h3>{ml.chosenLayerType}</h3>
            </div>
            </>
        )
    })
  )
}

export default ModelTree