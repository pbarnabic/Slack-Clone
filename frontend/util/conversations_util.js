export const createMessage = message => (
  $.ajax({
    method: "post",
    url: "/api/messages",
    data: {message}
  })
);
