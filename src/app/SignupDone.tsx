import { Container, Paper } from '@material-ui/core';

export default function SignupDone(): JSX.Element {
    return (
        <Container maxWidth="xs">
            <Paper style={{ padding: '2rem', textAlign: 'center' }}>
                Thanks for signup
            </Paper>
        </Container>
    );
}