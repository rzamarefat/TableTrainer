import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Data from './Data'
import Explore from './Explore'
import Train from './Train'
import Evaluate from './Evaluate'
import Predict from './Predict'
import ModelView from './ModelView'



const Desk = () => {
    const dispatch = useDispatch()
    const deskName = useSelector(state => state.deskSection)

  return (
    <>
        <div className='row desk p-5'>
            <div className='col '>
                {deskName === "DATA" && <Data/>}
                {deskName === "EXPLORE" && <Explore/>}
                {deskName === "MODEL_VIEW" && <ModelView/>}
                {deskName === "TRAIN" && <Train/>}
                {deskName === "EVALUATE" && <Evaluate/>}
                {deskName === "PREDICT" && <Predict/>}
            </div>
        </div>
    </>
  )
}

export default Desk