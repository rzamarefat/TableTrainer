import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
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
    <hr/>
    <h3 className='my-2'>Description</h3>
    <hr/>
    <div className='row'>
      <h6>Number of all samples: {totalNumberOfSamples}</h6>
      <hr/>
      <h6>Features, Targets, Data Types</h6>
      <div className='d-flex flex-column'>
      <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <td>Column</td>
              <td>Feature/Target</td>
              <td>Data Type</td>
            </tr>
          </thead>
        {columnsnames.map(c => {
          return (
            
              <>
                <tbody>
                  <tr>
                    <td>{c}</td>
                    <td className='d-flex flex-row justify-content-between'>
                    <Form.Check
                        inline
                        label="Feature"
                        name={`${c}-group`}
                        type="radio"
                        id="elu"
                    />
                    <Form.Check
                        inline
                        label="Target"
                        name={`${c}-group`}
                        type="radio"
                        id="elu"
                    />
                    <Form.Check
                        inline
                        label="Not-include"
                        name={`${c}-group`}
                        type="radio"
                        id="elu"
                    />
                    </td>
                    <td>
                      <Form.Check
                          inline
                          label="Numerical"
                          name={`${c}-group`}
                          type="radio"
                          id="elu"
                      />
                      <Form.Check
                          inline
                          label="Categorical"
                          name={`${c}-group`}
                          type="radio"
                          id="elu"
                      />
                      <Form.Check
                          inline
                          label="Not-include"
                          name={`${c}-group`}
                          type="radio"
                          id="elu"
                      />

                    </td>
                  </tr>
                </tbody>
              </>
              
            
          )
        })}
      </Table>
      </div>
      <hr/>
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