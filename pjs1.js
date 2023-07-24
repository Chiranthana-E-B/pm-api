//httpbin.org/get

/*
console.clear();
let p = {
    name:"ram",
    age:20,
    "f-name":"yes",
    show: function(){
        console.log(`hello ${this.name}`);
    }
};
p.email ="p@example.com";
console.log(p["f-name"]);
console.log(p.name);
console.log(p["age"]);
p.show();


//
console.clear();
let p = {
    name:"ram",
    age:20,
    "f-name":"yes",
    show: function(){
        console.log(`hello ${this.name}`);
    }
};
p.email ="p@example.com";
//console.log(JSON.stringify(p));
let pjson = JSON.parse(JSON.stringify(p));
console.log(pjson.age);


//
console.clear();
let p = {
    socialm: ['fbook', 'insta', 'twitter',90, {name: "any"}]
};
//console.log(p.socialm);
//console.log(p.socialm[4]);
//console.log(p.socialm[4].name);
//p.socialm.push("youtube");
//p.socialm.pop();
console.log(p.socialm.sort());
*/

/*
//
console.clear();
let p = {
    socialm: ['fbook', 'insta', 'twitter',90, {name: "any"}]
};
*/
/*
p.socialm.forEach(logitems);
function logitems(item, index,array){
    console.log(item,index,array);
};
*/
/*
p.socialm.forEach(function (item, index,array){
    console.log(item)
});
*/
/*
p.socialm.forEach((item, index,array) => {
    console.log(item)
});
*/
//p.socialm.forEach(console.log);


//
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});

//https://run.mocky.io/v3/0d6b61f9-a2db-4286-964a-9460db039204
//https://run.mocky.io/v3/62aa820c-8e42-43e7-8897-6f154b253711

/*
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const response = pm.response.json();

pm.test("Testing the name", function () {    
    pm.expect(response.name).to.eql("Jane");
});

pm.test("insta check", () => {  
    let insta = false;  
    response.socialMedia.forEach((item) => {
        if(item === 'YouTube')
            insta = true;
    });
    pm.expect(insta).to.eql(true);
});
*/

//
console.clear();
const response = pm.response.json();
//console.log(response.Response.Data[0].Results[0].Address.Active);
const results = response.Response.Data[0].Results;

let hasaddr = false;
results.forEach((i) => {
    console.log(i.Address.Active);
    console.log(i.Address.Active === true);
    if (i.Address.Active === true){
        hasaddr = true;
    }
});
console.log(`has active results ${hasaddr}`);

//"https://simple-books-api.glitch.me"