const success = (data) =>
  JSON.stringify({
    status: "success",
    data,
  });

const error = (message) =>
  JSON.stringify({
    status: "error",
    message,
  });

module.exports = { success, error };