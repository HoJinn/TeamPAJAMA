import { NextPage } from 'next';
import Layout from 'components/layout/main';
import { Box, makeStyles, Typography } from '@material-ui/core';
import theme from 'theme/theme';
const useStyles = makeStyles((theme) => ({

}))
const Index: NextPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Box width={"100%"} padding={2}>
        <Box textAlign={'center'}>
          <Typography component={'span'} variant='body1'>(주) </Typography>
          <Typography component={'span'} variant='body1' color='primary'> 닥터</Typography>
          <Typography component={'span'} variant='body1'>크린 소개</Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Index;