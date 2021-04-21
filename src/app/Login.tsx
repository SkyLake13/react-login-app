import { TextField, Container, Button, Typography, Paper } from '@material-ui/core';
import { CSSProperties } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';

import './App.scss';
import image from "../assets/react.png";

interface FormData {
    username: string;
    password: string;
}

const form: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center'
}

function useQuery(): URLSearchParams {
    return new URLSearchParams(useLocation().search);
  }

export default function Login(): JSX.Element {
    const queryParams = useQuery();

    const { register, handleSubmit, errors } = useForm<FormData>();

    const onSubmit = (dta: FormData) => {
        console.log(dta);
        window.location.href = queryParams.get('return_url') ?? window.location.href;
    };

    return (
        <Container maxWidth="xs">
            <Paper style={{ padding: '2rem', textAlign: 'center' }}>
                <img src={image} />
                <form style={form} onSubmit={handleSubmit(onSubmit)}>
                    <TextField label="Username" variant="outlined" style={{ margin: '10px' }}
                        name="username" {...(errors.username && { error: true })} inputRef={register({ required: true })} />
                    <TextField type="password" label="Password" variant="outlined" style={{ margin: '10px' }}
                        name="password" {...(errors.password && { error: true })} inputRef={register({ required: true })} />
                    <Button type="submit" variant="contained" color="primary" style={{ margin: '10px' }}>
                        Login
                </Button>
                </form>
                <Typography>
                        <Link to="/signup" style={{ margin: '10px' }}>
                            Sign up
                        </Link>
                        <Link to="/forgot-password" style={{ margin: '10px' }}>
                            Forgot password?
                        </Link>
                </Typography>
            </Paper>
        </Container>
    );
}