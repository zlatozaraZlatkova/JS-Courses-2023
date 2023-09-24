function extract(content) {
  const text = document.getElementById(content).textContent;

  const regex = /[(](?<word>[a-zA-Z0-9_\s]+){1,}[)]/g;
  let match = regex.exec(text);

  let result = [];

  while (match !== null) {
    result.push(`${match[1]};`);
    match = regex.exec(text);
  }

  return result.join("\n");
}

// browser console => extract('content');