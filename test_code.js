var u = null;
var count=0;

function process(data){
if(data!=null){
for(var i=0;i<data.length;i++){
if(data[i].age>18){
count=count+1;
saveUser(data[i])
}
}
}
console.log("Total users processed :"+count)
}

function saveUser(user){
var query = "INSERT INTO users VALUES ('"+user.name+"',"+user.age+")";
database.execute(query)
}

process([
{name:"Amit",age:20},
{name:"Ravi",age:17},
{name:"Neha",age:25}
])
