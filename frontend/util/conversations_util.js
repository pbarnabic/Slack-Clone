export const createMessage = message => (
  $.ajax({
    method: "post",
    url: "/api/messages",
    data: {message}
  })
);

export const fetchMessages = id => (
  $.ajax({
    method: "get",
    url: `/api/channels/${id}/channelMessages`
  })
)
