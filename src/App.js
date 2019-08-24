import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Paper, Grid, Button } from '@material-ui/core'
import { FirstLayer, SecondLayer, ThirdLayer } from './Layers';

const styles = {
  gridContainer: {
    paddingTop: 50,
  },
  buttonStyle: {
    margin: 20,
    padding: 10
  }
}

export const Context = React.createContext({})

export const App = () => {
  const [firstCount, setFirstCount] = React.useState(0)
  const [secondCount, setSecondCount] = React.useState(0)
  const [thirdCount, setThirdCount] = React.useState(0)
  return (
    <Context.Provider value={{
      firstLayer: firstCount,
      secondLayer: secondCount,
      thirdLayer: thirdCount
    }}>
      <div className="App" style={{height: '100vh', backgroundColor: '#f2f2f2', overflow: 'hidden'}}>
        <Grid container spacing={3} style={styles.gridContainer}>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Grid container>
                <Grid item xs={4}>
                  <Button style={styles.buttonStyle} onClick={() => setFirstCount(firstCount + 1)}>First Layer Counter</Button>
                  <FirstLayer />
                </Grid>
                <Grid item xs={4}>
                  <Button style={styles.buttonStyle} onClick={() => setSecondCount(secondCount + 1)}>Second Layer Counter</Button>
                  <SecondLayer />
                </Grid>
                <Grid item xs={4}>
                  <Button style={styles.buttonStyle} onClick={() => setThirdCount(thirdCount + 1)}>Third Layer Counter</Button>
                  <ThirdLayer />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
      </div>
    </Context.Provider>
  );
}
