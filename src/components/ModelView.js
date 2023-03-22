import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


import NewLayer from './NewLayer';
import ModelTree from './ModelTree';

const ModelView = () => {
    const chosenLayerType = useSelector(state => state.chosenLayerType)
    const modelLayers = useSelector(state => state.modelLayers)

    const dispatch = useDispatch()


  return (
    <>
     <h1>Design your model</h1>
     <div className="row mt-5 ">
        <div className="col-sm-5 border p-3">
            <NewLayer/>
        </div>
        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center bg-light">
            {modelLayers.length === 0 && <h1>No model</h1>}
            {modelLayers.length !== 0 && <ModelTree />}
            
        </div>
        <button className="btn btn-dark mt-5">Compile Model</button>
     </div>
    </>
  )
}

export default ModelView