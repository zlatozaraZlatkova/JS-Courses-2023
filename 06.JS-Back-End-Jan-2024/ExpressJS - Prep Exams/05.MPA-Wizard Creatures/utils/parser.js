function parseError(err) {
  if (err.name == "ValidationError") {
    return Object.values(err.errors).map((value) => value.message);
    
  } else {
    return err.message.split("\n");
  }
}

module.exports = {
  parseError,
};