var enterStr = prompt("Enter string included key=value \n example:", "firstName = John, email=example@gmail.com, balance=300; firstName=Test, lastName=Test, email=admin@gmail.com, balance=1000; firstName=sasha, lastName=zakablukov, email=zakablukov@gmail.com, balance=1000000; firstName=vanya, lastName=Kiselev, email=vanya@gmail.com, balance=777;firstName=Ihor, lastName=Svatok, balance=500;firstName=Test, lastName=Test, email=admingmail.com, balance=1000;firstName=katya, lastName=molotok, email=molotok@gmail.com, balance=777");

var isEmpty = function(value){
  return typeof value!=="string" || value.length===0;
}

var isRequired = function(value){
  return !isEmpty(value);
}

var isEmail = function(email){
  return isRequired(email) && email.indexOf("@")!==-1;
}

var validationSchema = {
  firstName : isRequired,
  lastName : isRequired,
  email : isEmail,
  balance : isFinite
}

var Validator = function(validationSchema){
  this.validationSchema = validationSchema;
}

Validator.prototype.isValid = function(attributes){
    var keys = Object.keys(validationSchema);
    return keys.every(function(key){
      return validationSchema[key](attributes[key])
    })
}

var User = function(attributes, validationSchema){
    this.attributes = attributes || {}
    this.validator = new Validator(validationSchema);
}

User.prototype.isValid = function(){
        return this.validator.isValid(this.attributes)
}

var initObj = function(string){
    var objects = string.split(";").map(function(userAtrrStr){
        var objAttributes= userAtrrStr.split(",").reduce(function(result, keyValueString){
            var keyAndValue = keyValueString.split('=');
            result[keyAndValue[0].trim()] = keyAndValue[1].trim();
            return result;
        }, {})

        return new User(objAttributes, validationSchema)
    })
    var objectsAfterValid = objects.filter(function(objectUser){
        return objectUser.isValid();
    })
    return objectsAfterValid
}

var UsersCollection = function(user){
  this.users = [].concat(user);
}

UsersCollection.prototype.show = function(){
    this.users.forEach(function(element){
      console.log(element);
    });
    return this
}
UsersCollection.prototype.size = function(){
    return this.users.length;
}
UsersCollection.prototype.add = function(user){
    this.users.push(user);
    return this
}
UsersCollection.prototype.remove = function(user){
    for(var i = 0; i < this.users.length; i++){
      if(this.users[i] === user){
        this.users.splice(i, 1);
      }
    }
    return this
}
UsersCollection.prototype.addAll = function(usersArray){
    for(var i = 0; i < usersArray.length; i++){
      this.users.push(usersArray[i]);
    }
    return this
}
UsersCollection.prototype.clear = function(){
    this.users = [];
    return this
}
UsersCollection.prototype.findBy = function(propertyName, propertyValue){
    return this.users.filter(function(element, index) {
      for(var key in element.attributes){
        if(key===propertyName && element.attributes[key]===propertyValue){
          return element
        }
      }
  });
}
UsersCollection.prototype.sortBy = function(propertyName, order){
    var sortProp = function(a, b){
        if(a.attributes[propertyName] < b.attributes[propertyName]){
          return -1
        } 
        else if(a.attributes[propertyName] > b.attributes[propertyName]){
          return 1
        }
        else
          return 0
      }
    if(order === "asc"){
       this.users.sort(sortProp);
     }
    if(order === "desc"){
       this.users.sort(sortProp);
       this.users.reverse(); 
    }
    return this.users
}

var user1 = new User({
  firstName : "sasha",
  lastName : "zak",
  email : "zak@gmail.com",
  balance : "222"
}, validationSchema);
var user2 = new User({
  firstName : "vova",
  lastName : "voka",
  email : "zovo@gmail.com",
  balance : "100"
}, validationSchema);
var user3 = new User({
  firstName : "s",
  lastName : "z",
  email : "z@gmail.com",
  balance : "2"
}, validationSchema);
var user4 = new User({
  firstName : "viv",
  lastName : "viiiv",
  email : "viv@gmail.com",
  balance : "6"
}, validationSchema);



var arrOfObj = initObj(enterStr);
// console.log(arrOfObj);


var userList = new UsersCollection(user1);
userList.addAll(arrOfObj);

userList.add(user1).add(user2).clear().addAll([user3, user4]).remove(user3).add(user1).addAll(arrOfObj).show();
console.log("====================================");
console.log(userList.findBy("firstName", "sasha"));
console.log("====================================");
console.log(userList.sortBy("balance", "desc"));
console.log("====================================");
console.log(userList.sortBy("balance", "asc"));

