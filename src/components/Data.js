import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { upload, setColumnNames, updataDatasetInfo, setDataValues} from '../redux/actions';

import * as dfd from "danfojs"
import DataTable from './DataTable';

const Data = () => {
    const dispatch = useDispatch()
    const dataframe = useSelector(state => state.dataframe)

    useEffect(()=>{
        
        if (dataframe) {
            processDataFrame(dataframe)
        }
        

    }, [dataframe])
    


    const processDataFrame = (df) => {
        dispatch(setColumnNames(df.columns))

        dispatch(setDataValues(df.values))

        dispatch(updataDatasetInfo({
            totalNumberOfSamples: df.shape[0],

        }))
    }


    const handleFileChange = (e) => {
        if (e.target.files) {
            const file = e.target.files[0]

            dfd.readCSV(file).then((df) => {
                dispatch(upload(df))
            })
        }};

  return (
    <div className="d-flex flex-column justify-content-center ">
    {!dataframe && <h1 className='text-center text-danger'>No dataset file is uploaded!</h1>}
    {dataframe && <h1 className='text-center text-dark'>You have successfully uploaded a file</h1>}

    <div className='mt-5'>
        <label htmlFor="files" className="btn text-light bg-dark d-flex justify-content-center align-items-center p-4 label-btn">Upload</label>
        <input id="files" type="file"  style={{visibility:'hidden'}}  onChange={(e) => handleFileChange(e)} className='bg-dark d-flex justify-content-center align-items-center'/>
    </div>


    {dataframe && <DataTable/>}

    </div>
  )
}

export default Data