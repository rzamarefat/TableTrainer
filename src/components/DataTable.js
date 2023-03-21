import { useSelector, useDispatch } from 'react-redux';

import Table from 'react-bootstrap/Table';
import { setNumberOfDataRowsToShow } from '../redux/actions';
import { useEffect } from 'react';

const DataTable =  () => {
  const columnsnames = useSelector(state => state.columnsnames)
  const datavalues = useSelector(state => state.datavalues)
  const { totalNumberOfSamples } = useSelector(state => state.datasetInfo)
  const numberOfRowsToShow = useSelector(state => state.numberOfRowsToShow)



  const dispatch = useDispatch()

  useEffect(()=>{

  }, [numberOfRowsToShow])


  return (
    <>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Number of rows to show (Total: {totalNumberOfSamples})</span>
        </div>
        <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" defaultValue={numberOfRowsToShow} onChange={(e) => dispatch(setNumberOfDataRowsToShow(parseInt(e.target.value)))} min="1" max={totalNumberOfSamples}/>
    </div>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          

          {["#", ...columnsnames].map(cn => {
            return (
              <th>{cn}</th>
            )
          })}
      
        </tr>
      </thead>
        {(datavalues && numberOfRowsToShow) && <tbody>
          {[...Array(numberOfRowsToShow).keys()].map(i => {
            return (
              <tr>
                {datavalues[i] && [i, ...datavalues[i]].map((d, id) => (<td>{d}</td>))}
              </tr>
            )
          })}
        </tbody>}
    </Table>
    </>
  );
}

export default DataTable;