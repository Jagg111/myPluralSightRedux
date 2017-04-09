
export function authorsFormattedForDropdown (authors) {
  // return a new object that has the properties we expect
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}
