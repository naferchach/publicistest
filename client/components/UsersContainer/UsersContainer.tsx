// @ts-nocheck
import Container from 'react-bootstrap/Container';
import UsersList from './UsersList';
import FilterForm from './FilterForm';
import { useUserContext } from '../../contexts/userContext';
import { fetchUsers } from '../../actions/user';
import Button from 'react-bootstrap/Button'
import { MAX_USERS_LISTE_SIZE } from '../../utils/constants';

const UserContainer = () => {
    const [{ users }, { dispatch }] = useUserContext();

    const isMaxUsers = users.length === MAX_USERS_LISTE_SIZE;

    const getMoreUsers = async ()=>{
        await fetchUsers({users, dispatch});
    }

    return(
        <Container>
            <div style={{height: '3rem'}}></div>
            <FilterForm/>
            <div style={{height: '3rem'}}></div>
            <UsersList/>
            {!isMaxUsers ? (
                <>
                    <div style={{textAlign: 'center'}}>
                        <Button variant="primary" size="lg" onClick={getMoreUsers}>Fetch more</Button>
                    </div>
                    <div style={{height: '3rem'}}></div>
                </>
                ):('')
            }
        </Container>
    )
}

export default UserContainer;