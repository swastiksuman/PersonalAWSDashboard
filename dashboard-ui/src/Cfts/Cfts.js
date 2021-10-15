import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios'

function Cfts(){

    const [result, setResult] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/allcfts').then(res=> setResult(res.data.data));
    }
    )
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
                <td>{r}</td>
                <td>ACTIVE</td>
                <td>15 Oct</td>
            </tr>
    ))
    }
  </tbody>
</Table>
    )
}

export default Cfts;