import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Data from './Data'
import Train from './Train'


const Desk = () => {
    const dispatch = useDispatch()
    const deskName = useSelector(state => state.deskSection)

  return (
    <>
        <div className='row desk p-5'>
            <div className='col bg-danger'>
                
                {deskName === "DATA" && <Data/>}
                {deskName === "TRAIN" && <Train/>}

            </div>
        </div>
    </>
  )
}

export default Desk