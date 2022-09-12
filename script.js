
// task 1 

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [a,b,c,d] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// task 2 

// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
//  };
//  let {names:[name0,name1,name2,name3], ages:[age0,age1,age2,age3]} = data;

//  console.log(name0);
//  console.log(age0);

//  console.log(name1);
//  console.log(age1);

//  console.log(name2)
//  console.log(age2);

//  console.log(name3);
//  console.log(age3);

// task 3 

// function mul( ...args) {

//     let res = 1 
//     let notaN = 0
//     args.forEach(el => {

//         if(Number(el)){
            
//             res *= el
//         } else{
//             notaN += 1

//         }
//     });
//     return notaN > 2 ?  0 : res  
// }

// console.log(mul(1, "str", 2, 3, true));
// console.log(mul(null, "str", false, true));


// task 4 


// let server = {
//     data: 0,
//     convertToString: function (callback) {
//        callback(( () => {
//           return this.data + "";
//        }));
//     }
//  };
//  let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//        this.server.data = data;
//        this.server.convertToString(this.notification());
//     },
//     notification: function () {
//        return ( (callback) => {
//           this.result = callback();
//        });
//     }
//  };
//  client.calc(123);
//  console.log(client.result); // "123"
//  console.log(typeof client.result); // "string"



// task 5 

function mapBuilder(keys, values){

    let map = new Map()
    if(keys.length == values.length){
        for (let i = 0; i < keys.length; i++) {
            map.set(keys[i],values[i])
        }
    }else{
        console.log("-");
        return 0 
    }
    return map 
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map);
console.log(map.size); // 4
	console.log(map.get(2)); // "span"