import React, { ChangeEvent, useState, useEffect } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/action';
import { toast } from 'react-toastify';


function Login() {

    let history = useHistory()
    
    const dispatch = useDispatch();

    const [token, setToken] = useState('')

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    useEffect(() => {
        if(token !== ""){
            dispatch(addToken(token));
            history.push('/home')
        }
    }, [token])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value           
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose:2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
      
            })

        } catch (error) {
            toast.error('Dados inconsistente. Favor verificar as informações de cadastro!', {
                position: "top-right",
                autoClose:2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
      
            })
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='background' >
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20} >
                        
                    <form onSubmit={ onSubmit } className='textos1'>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>ENTRAR</Typography>

                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='USUÁRIO'name='usuario' variant='filled' margin='normal' fullWidth required />
                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='SENHA' name='senha' variant='filled' margin='normal' type='password' fullWidth required />

                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' className='btn btn--secondary btn-content textos1'>
                                Logar
                            </Button>

                        </Box>
                    </form>

                        
                    <Box display='flex' justifyContent='center' marginTop={2} className='btn2 btn--secondary2 btn-content2'>
                        <Link to='/cadastro'>
                       <Button type='submit' className= 'btn2 btn--secondary2 btn-content textos1'> Não tem uma conta? Cadastre-se!</Button>
                        </Link>
                    </Box>      
                </Box>
                
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    )
}

export default Login