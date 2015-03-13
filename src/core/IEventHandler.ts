/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
import ICoreEvent = require('./ICoreEvent');
import IQueue = require('../collections/IQueue');

export = IEventHandler;


/**
 * An object which handles core events.
 */
interface IEventHandler {
  /**
   * Process an event dispatched to the handler.
   */
  processEvent(event: ICoreEvent): void;

  /**
   * Compress an event posted to the event handler.
   *
   * This optional method allows the handler to merge a posted event
   * with an event which is already enqueued. It should return true
   * if the event was compressed and should be dropped, or false if
   * the event should be queued for delivery as normal.
   */
  compressEvent?(event: ICoreEvent, postedEvents: IQueue<ICoreEvent>): boolean;
}
