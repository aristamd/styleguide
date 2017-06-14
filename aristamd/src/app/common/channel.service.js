import rx from 'rx';
import _ from 'lodash';

export default function channelService () {

  var service = {};

   service.channels = {};

   /**
    * Creates a new channel with given behavior (options) and returns it.
    * If the channel already exists, just returns it.
    */
   service.createChannel = function(name, behavior)
   {
     checkName(name);
     if (_.isObject(service.channels[name]))
       return service.channels[name];

     behavior = _.defaults({}, behavior, { persistent: false });

     if (behavior.persistent)
     {
       _.defaults(behavior, { bufferSize: null /* unlimited */, windowSize: 5000 /* 5 s */ });
       service.channels[name] = new Rx.ReplaySubject(behavior.bufferSize, behavior.windowSize);
     }
     else
     {
       service.channels[name] = new Rx.Subject();
     }
     return service.channels[name];
   };

   /**
    * Returns the channel at given name, undefined if not existing.
    */
   service.getChannel = function(name)
   {
     checkName(name);
     return service.channels[name];
   };

   /**
    * Posts an event with a value.
    */
   service.post = function(name, value)
   {
     var channel = service.getChannel(name);
     if (channel)
     {
       channel.onNext(value);
     }
   };

   /**
    * Offers a facility to dispose subscriptions if collected in an array.
    */
   service.dispose = function(subscriptions)
   {
     _(subscriptions)
       .filter(rx.Disposable.isDisposable)
       .forEach(function(s) { console.log(s); s.dispose(); })
       .value(); // = execute
   };


   function checkName(name)
   {
     if (!_.isString(name))
       throw Error('Name of channel must be a string.');
   }


   return service;
}
