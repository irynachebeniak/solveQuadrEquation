const a = Number(prompt('Input A'));
const b = Number(prompt('Input B'));
const c = Number(prompt('Input C'));

function solveQuadr(a, b, c) {
  let x1, x2, x3;
  const d = disc(a, b, c);
x1 = (-b + Math.sqrt(d))/(2*a);
x2 = (-b - Math.sqrt(d))/(2*a);
x3 = -b/(2*a);
  if (d > 0) {
    return 'x1 = ' + x1 + ', x2 = ' + x2;
  } else if (d === 0) {
    return x3
  } 
return 'False'
}

function disc(a, b, c) {
  return b*b-4*a*c;
}

const result = solveQuadr(a, b, c);
prn(result);

function prn(val) {
  document.write(val);
}