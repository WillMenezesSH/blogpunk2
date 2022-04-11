import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'


import './NavBar.css'
import {useDispatch, useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { addToken } from '../../../store/tokens/action'
import {toast} from 'react-toastify'

function NavBar() {

    let history = useHistory()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

      const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose:2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,

        })
        history.push("/login")
    }

    var navbarComponent;

    if(token !== ""){
            navbarComponent = <AppBar position="static">
                <Toolbar variant="dense" className='back'>
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit" className='textos'>
                            SHINOLOG   |
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='textos' >
                                    HOME |
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography className='textos' variant="h6" color="inherit">
                                    POSTAGENS |
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='textos'>
                                    TEMAS |
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/formularioTema" className="text-decorator-none" >
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='textos'>
                                    CADASTRAR TEMAS |
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor' onClick={ goLogout }>
                            <Typography variant="h6" color="inherit" className='textos'>
                                LOGOUT
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default NavBar