export const createDirectMessage = dm => (
  $.ajax({
    method: 'POST',
    url: '/api/direct_messages',
    data: {dm}
  })
);

export const fetchDMCandidates = () => (
  $.ajax({
    method: "get",
    url: '/api/direct_messages/dm_candidates'
  })
);

export const fetchDMs = () => (
  $.ajax({
  method: "get",
  url: '/api/direct_messages'
  })
);
