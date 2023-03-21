import { useSelector, useDispatch } from 'react-redux';

import Table from 'react-bootstrap/Table';
import { setNumberOfDataRowsToShow } from '../redux/actions';

const DataTable =  () => {
  const columnsnames = useSelector(state => state.columnsnames)
  const datavalues = useSelector(state => state.datavalues)
  const { totalNumberOfSamples } = useSelector(state => state.datasetInfo)
  const numberOfRowsToShow = useSelector(state => state.numberOfRowsToShow)



  const dispatch = useDispatch()


  return (
    <>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Number of rows to show (Total: {totalNumberOfSamples})</span>
        </div>
        <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" defaultValue={numberOfRowsToShow} onChange={(e) => dispatch(setNumberOfDataRowsToShow(parseInt(e.target.value)))}/>
    </div>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          

          {columnsnames.map(cn => {
            return (
              <th>{cn}</th>
            )
          })}
      
        </tr>
      </thead>
        {datavalues && <tbody>
          {[...Array(5).keys()].map(i => {
            return (
              <tr>
                {datavalues[i] && datavalues[i].map(d => <td>{d}</td>)}
              </tr>
            )
          })}
        </tbody>}
    </Table>
    </>
  );
}

export default DataTable;