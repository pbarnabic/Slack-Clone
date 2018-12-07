export const search = (str) => (
  $.ajax(
    {url: "api/messages/search",
     method: "get",
     data: {query: str}
    })
);
