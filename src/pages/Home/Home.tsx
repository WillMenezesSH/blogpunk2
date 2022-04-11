import React, { useEffect } from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem'

import "./Home.css"
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer'
import { toast } from 'react-toastify'

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );

    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado!', {
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
    }, [token])

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>

        <Grid alignItems="center" item xs={6}>

          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>

          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to="/posts">
            <Button  className='btn btn--secondary btn-content text-decoration titulo'>Ver Postagens</Button>
            </Link>
          </Box>

        </Grid>

        <Grid item xs={6} className='caixa2'>
          
        </Grid>

        <Grid xs={12} className='postagens'>
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  )
}

export default Home