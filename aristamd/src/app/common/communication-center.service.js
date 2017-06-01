
export default function communicationCenterService (ChannelService) {
  var service = {};

      function post(channelName, topic, value)
      {
        var wrapper =
        {
          topic: topic,
          value: value
        };
        ChannelService.post(channelName, wrapper);
      }

      function on(channel, topic)
      {
        return channel
          .filter(function(wrapper) { return wrapper.topic === topic; })
          .map(function(wrapper) { return wrapper.value; });
      }

      function createChannel(name, behavior)
      {
        var channel = ChannelService.createChannel(name, behavior);
        return {
          observable: channel,
          post: _.partial(post, name) ,
          on: _.partial(on, channel)
        };
      }

      service.getChannel = ChannelService.getChannel;
      service.createChannel = createChannel;
      service.dispose = ChannelService.dispose;

      return service;
}
