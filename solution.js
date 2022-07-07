
var euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
var secondCity = euroCities[1];
euroCities [0] = 'Berlin';
console.log(euroCities.length);
euroCities.pop();
euroCities.push('Budapaest')
console.log(euroCities)
var asianCities =  ['Tokyo','Hanoi','Taipei','Hong Kong','Beijing']
console.log(asianCities)
var worldCities = [...euroCities, ...asianCities]
console.log(worldCities.reverse());
euroCities.splice(2,1);
console.log(euroCities);
var removedAsianCities = asianCities.splice(1,3)
console.log(removedAsianCities)


worldCities[4]  = 'Toronto' ;
worldCities.splice(1, 0, 'Washington');
console.log(worldCities)
console.log(worldCities.join())

var message = "Hello World"
console.log(message.split('').reverse().join(''))



