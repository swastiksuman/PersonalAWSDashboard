import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

function Cfts(){

    const [result, setResult] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/allcfts').then(res=> setResult(res.data.stacks));
    }
    )
    function deleteStack(stackId){
        console.debug('Deleting: '+stackId)
    }
    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>CFT Name</th>
      <th>State</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        result === null ? (<p>no result</p>) :
        (result.map((r, k) => 
            <tr>
                <td>{k+1}</td>
                <td>{r.stackName}</td>
                <td>{r.stackId}</td>
                <td>{r.stackStatus}</td>
                <td><Button variant="danger" onClick={()=> deleteStack(r.stackId)}>Delete</Button></td>
            </tr>
    ))
    }
  </tbody>
</Table>
    )
}

export default Cfts;