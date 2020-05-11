import { makeStyles } from '@material-ui/styles';

const centeredStyleObj = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
export default makeStyles({
  container: {
    height: '100vh',
    flexDirection: 'column',
    ...centeredStyleObj
  },
  cardContainer: {
    flexDirection: 'column',
    width: 400,
    padding: '2rem',
    height: 200,
    ...centeredStyleObj
  },
  title: {
    fontSize: '4rem'
  },
  titleGridContainer: {
    ...centeredStyleObj,
  },
  textField: {
    width: '90%'
  },
  searchButton: {
    marginLeft: '.5rem'
  },
  buttonsContainer: {
    marginLeft: '.5rem',
    marginTop: 5
  },
  movieIcon: {
    fontSize: '4rem'
  }
});