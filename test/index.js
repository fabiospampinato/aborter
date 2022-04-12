
/* IMPORT */

import {describe} from 'fava';
import Aborter from '../dist/index.js';

/* MAIN */

describe ( 'Aborter', it => {

  it ( 'works', async t => {

    t.plan ( 3 );

    const aborter = new Aborter ();

    t.is ( aborter.signal.aborted, false );

    return new Promise ( resolve => {

      t.is ( aborter.signal.aborted, false );

      aborter.signal.addEventListener ( 'abort', () => {

        t.is ( aborter.signal.aborted, true );

        resolve ();

      });

      setTimeout ( () => {

        aborter.abort ();

      }, 100 );

    });

  });

});
