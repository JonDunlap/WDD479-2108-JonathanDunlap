import React from 'react';
import Grid from '@material-ui/core/Grid';

import * as styles from './introduction.module.css';

export default function Header() {
  return (
    <Grid
      item
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='flex-start'
      spacing={1}
      component='section'
    >
      <Grid item component='h1'>
        Hello World!
      </Grid>
      {/* TODO - change to 2 separate grid items for mobile view */}
      <Grid item component='h2' className={styles.typewriter}>
        My Name Is: Jonathan Dunlap
      </Grid>
      <Grid item component='h3'>
        Web Developer
      </Grid>
    </Grid>
  );
}
