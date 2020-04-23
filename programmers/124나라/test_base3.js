function solution(n) {
    var answer = '';
    var v = [];
        debugger;
    cal(n, v);
    console.log(v);
    return v;
}

function cal(n, v) {
	var base3 = 3;
  var i = 0;
  while(base3 < n) {
  	base3 *= 3;
    i++;
  }
  console.log(base3);
  
  if(i < 1) {
  	v[0] = n;
    return;
  }
  base3 = base3 / 3
  if((base3 * 2) <= n ) {
    v[i] = 2;
		cal(n - (base3 * 2), v);
  } else {
  	v[i] = 1;
    cal(n - (base3), v);
  } 
}

function convert(v) {
	const base124 = []
	f.forEach((base3, index, arr) => {
  	if(base3 = )
  	base124[f.length - index  - 1] = 
  });
}
solution(15);
