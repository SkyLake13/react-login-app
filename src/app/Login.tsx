import { TextField, Container, Button, Typography, Paper } from '@material-ui/core';
import { CSSProperties } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';

import './App.scss';
import image from "../assets/react.png";
import useHttp from './useHttp';

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
    let returnUrl = queryParams.get('return_url');

    const { post } = useHttp('/login');

    const { register, handleSubmit, errors } = useForm<FormData>();

    const onSubmit = async (dta: FormData) => {
        console.log(dta);

        const response = await post<{ token: string }>({ userName: dta.username, password: dta.password });

        returnUrl = returnUrl ?? window.location.href;
        returnUrl = `${returnUrl}?token=${response.data.token}`;

        window.location.replace(returnUrl);
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