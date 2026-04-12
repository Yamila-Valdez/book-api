const success = (data) => {
  return JSON.stringify({
    status: "success",
    data,
  });
};

const error = (message) => {
  return JSON.stringify({
    status: "error",
    message,
  });
};

module.exports = { success, error };