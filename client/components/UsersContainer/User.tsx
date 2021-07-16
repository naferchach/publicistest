import Card from 'react-bootstrap/Card'

type UserProps = {
    user: any
}

const User = ({ user }: UserProps) => {
    const { name, address, email, phone } = user;

    return(
        <Card style={{ marginBottom: '2rem', minHeight: '11rem' }}>
            <Card.Body>
                <Card.Title>Full name: {name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Email: {email}</Card.Subtitle>
                <Card.Text>
                    Address: {address}
                </Card.Text>
                <Card.Text>
                    Phone number: {phone}
                </Card.Text> 
            </Card.Body>
        </Card>
    )
}

export default User





