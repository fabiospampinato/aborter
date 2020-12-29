
/* IMPORT */

import {Event, Listener} from './types';

/* ABORT SIGNAL */

class AbortSignal {

  /* VARIABLES */

  aborted: boolean = false;
  listeners: Partial<Record<Event, Listener[]>> = {};

  /* API */

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

}

/* EXPORT */

export default AbortSignal;
