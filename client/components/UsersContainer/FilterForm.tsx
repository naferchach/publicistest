// @ts-nocheck
import Form from 'react-bootstrap/Form';
import { useUserContext } from '../../contexts/userContext';

const FilterForm  = () => {
    const [, { filterByUserName }] = useUserContext();
    
    const handleFilterByName = (e) => {
        filterByUserName(e.target.value);
    }

    return (
        <Form.Control size="lg" type="text" placeholder="Search user" onChange={handleFilterByName} />
    )

}

export default FilterForm;