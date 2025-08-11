function isSameType(value1, value2) {
  //your js code here
	const bothAreNaN = Number.isNaN(value1) && Number.isNaN(value2);
  if (bothAreNaN) return true;

  // If only one is NaN, they are not the same type under this rule
  if (Number.isNaN(value1) || Number.isNaN(value2)) return false;

  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
let parsed1 = isNaN(Number(value1)) ? value1 : Number(value1);
let parsed2 = isNaN(Number(value2)) ? value1 : Number(value2);
alert(isSameType(parsed1, parsed2));
