
/* IMPORT */

import {Event, Listener} from './types';

/* ABORT SIGNAL */

class AbortSignal {

  /* VARIABLES */

  public aborted: boolean = false;
  private listeners: Partial<Record<Event, Listener[]>> = {};

  /* EVENTS API */

  addEventListener ( event: Event, listener: Listener ): void {

    const listeners = this.listeners[event] || ( this.listeners[event] = [] );

    listeners.push ( listener );

  }

  removeEventListener ( event: Event, listener: Listener ): void {

    const listeners = this.listeners[event];

    if ( !listeners ) return;

    listeners.splice ( listeners.indexOf ( listener ), 1 );

  }

  dispatchEvent ( event: Event ): boolean {

    const listeners = this.listeners[event];

    if ( !listeners ) return true;

    listeners.slice ().forEach ( listener => listener () );

    return true;

  }

  /* API */

  abort (): void {

    if ( this.aborted ) return;

    this.aborted = true;
    this.dispatchEvent ( 'abort' );

  }

}

/* EXPORT */

export default AbortSignal;
