// @ts-nocheck
import { useEffect } from 'react';
import { fetchUsers } from '../../actions/user';
import User from './User';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useUserContext } from '../../contexts/userContext';

const UsersList = () => {
    const [{ users, filtredListUsers, loading }, { dispatch }] = useUserContext();

    //-- initilise and update users lists
    const usersList = filtredListUsers.length ? filtredListUsers : users;

    useEffect(() => {
        fetchUsers({ users, dispatch });
    }, []);

    if (loading) return <div>Loading ...</div>;

    return (
        <Row>
            {usersList?.map((user, index) => (
                <Col xs={12} sm={6} lg={4} key={index}>
                    <User user={user} />
                </Col>
            ))}
        </Row>
    );
};

export default UsersList;
