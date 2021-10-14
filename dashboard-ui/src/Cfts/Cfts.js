import { useState } from 'react';
import Table from 'react-bootstrap/Table'

function Cfts(){

    const [result, setResult] = useState([{"cft_name": "cft1", "cft_state":"COMPLETE","date":"21 Oct"},
                                        {"cft_name": "cft2", "cft_state":"COMPLETE","date":"22 Oct"},
                                        {"cft_name": "cft3", "cft_state":"COMPLETE","date":"23 Oct"}]);

    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>CFT Name</th>
      <th>State</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {
        result === null ? (<p>no result</p>) :
        (result.map((r, k) => 
            <tr>
                <td>{k+1}</td>
                <td>{r.cft_name}</td>
                <td>{r.cft_state}</td>
                <td>{r.date}</td>
            </tr>
    ))
    }
  </tbody>
</Table>
    )
}

export default Cfts;