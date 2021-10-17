import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { useState } from 'react';

function CreateCfts(){
    const [value, setValue] = useState([1, 3]);
    const handleChange = (val) => setValue(val);
    return(
        <div>
            <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton value={1}>Option 1</ToggleButton>
                <ToggleButton value={2}>Option 2</ToggleButton>
                <ToggleButton value={3}>Option 3</ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}

export default CreateCfts;