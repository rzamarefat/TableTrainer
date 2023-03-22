import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


import NewLayer from './NewLayer';
import ModelTree from './ModelTree';

const ModelView = () => {
    const chosenLayerType = useSelector(state => state.chosenLayerType)


    const dispatch = useDispatch()


  return (
    <>
     <h1>Design your model</h1>
     <div className="row mt-5 ">
        <div className="col-sm-5 border p-3">
            <NewLayer/>
        </div>
        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
            <ModelTree/>
        </div>
     </div>
    </>
  )
}

export default ModelView