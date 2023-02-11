
/* IMPORT */

import AbortSignal from './signal';

/* MAIN */

class AbortController {

  /* VARIABLES */

  public signal: AbortSignal = new AbortSignal ();

  /* API */

  abort (): void {

    if ( this.signal.aborted ) return;

    this.signal.aborted = true;
    this.signal.dispatchEvent ( 'abort' );

  }

}

/* EXPORT */

export default AbortController;
