
/* IMPORT */

import type {Event, Listener} from './types';

/* MAIN */

class AbortSignal {

  /* VARIABLES */

  public aborted: boolean = false;
  private listeners: Set<Listener> = new Set ();

  /* EVENTS API */

  addEventListener ( event: Event, listener: Listener ): void {

    if ( event !== 'abort' ) return;

    this.listeners.add ( listener );

  }

  removeEventListener ( event: Event, listener: Listener ): void {

    if ( event !== 'abort' ) return;

    this.listeners.delete ( listener );

  }

  dispatchEvent ( event: Event ): boolean {

    if ( event !== 'abort' ) return false;

    [...this.listeners].forEach ( listener => listener () );

    return true;

  }

}

/* EXPORT */

export default AbortSignal;
