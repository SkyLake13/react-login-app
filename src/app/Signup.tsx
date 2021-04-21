import { TextField, Container, Button, Typography, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CSSProperties } from 'react';

import image from "../assets/react.png";

interface FormData {
    username: string;
    password: string;
    confirmPassword: string;
    name: string;
    email: string;
}

const form: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center'
}

export default function Signup(): JSX.Element {
    const { register, handleSubmit, errors } = useForm<FormData>();

    const onSubmit = (dta: FormData) => {
        console.log(dta);
    };

    return (
        <Container maxWidth="xs">
            <Paper style={{ padding: '2rem', textAlign: 'center' }}>
                <img src={image} style={{width: '40%'}} />
                <form style={form} onSubmit={handleSubmit(onSubmit)}>
                    <TextField label="Name" variant="outlined" style={{ margin: '10px' }}
                        name="name" {...(errors.name && { error: true })} inputRef={register({ required: true })} />
                    <TextField type="email" label="Email" variant="outlined" style={{ margin: '10px' }}
                        name="email" {...(errors.email && { error: true })} inputRef={register({ required: true })} />
                    <TextField label="Username" variant="outlined" style={{ margin: '10px' }}
                        name="username" {...(errors.username && { error: true })} inputRef={register({ required: true })} />
                    <TextField type="password" label="Password" variant="outlined" style={{ margin: '10px' }}
                        name="password" {...(errors.password && { error: true })} inputRef={register({ required: true })} />
                    <TextField type="password" label="Confirm Password" variant="outlined" style={{ margin: '10px' }}
                        name="confirm-password" {...(errors.confirmPassword && { error: true })} inputRef={register({ required: true })} />
                    <Button type="submit" variant="contained" color="primary" style={{ margin: '10px' }}>
                        Signup
                    </Button>
                </form>
                <Typography>
                    <Link to="/" style={{ margin: '10px' }}>
                        Login
                    </Link>
                </Typography>
            </Paper>
        </Container>
    );
}