function missingValues(hotel) {
  const missing = Object.entries(hotel).filter(([key, value]) => !value);
  if (missing.length > 0) {
    throw new Error(
      missing.map((missing) => `${missing[0]} field is required!`)
        .join("\n")
    );
  }
}

module.exports = {
  missingValues,
};
