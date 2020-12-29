
/* IMPORT */

import AbortSignal from './signal';

/* ABORT CONTROLLER */

class AbortController {

  /* VARIABLES */

  signal: AbortSignal = new AbortSignal ();

  /* API */

  abort (): void {

    this.signal.aborted = true;
    this.signal.dispatchEvent ( 'abort' );

  }

}

/* EXPORT */

export default AbortController;
