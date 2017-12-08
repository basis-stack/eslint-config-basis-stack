function mochaDescribe(prefix, title, contents) {

  return describe(`${prefix} ${title}`, contents);
}

function mochaIt(prefix, title, contents) {

  return it(`${prefix} ${title}`, contents);
}

export function the(title, contents) {

  return mochaDescribe('The', title, contents);
}

export function should(title, contents) {

  return mochaIt('should', title, contents);
}