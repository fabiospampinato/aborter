
/* IMPORT */

import AbortSignal from './signal';

/* MAIN */

class AbortController {

  /* VARIABLES */

  signal: AbortSignal = new AbortSignal ();

  /* API */

  abort (): void {

    return this.signal.abort ();

  }

}

/* EXPORT */

export default AbortController;
