/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
export = ICoreEvent;


/**
 * An object which can be sent to an event handler.
 */
interface ICoreEvent {
  /**
   * The type of the event.
   */
  type: string;
}
