function parseError(error) {
  if (Array.isArray(error)) {
    //! визимаме msg защото така работят грешките от валидатова
      return error.map(e => e.msg).join('\n');

  } else if (error.name == 'ValidationError') {
    //това е грешка от mongoose
      return Object.values(error.errors).map(v => v.message).join('\n');
      
  } else {
    //в противен случай връщаме съобщяние низ защото клинета очаква да получи едно поле "error.message"
      return error.message;
  }
}

module.exports = {
  parseError
};