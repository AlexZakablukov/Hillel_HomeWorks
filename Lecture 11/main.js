var enterStr = prompt("Enter string included key=value \n example:", "firstName = John, email=example@gmail.com, balance=300; firstName=Test, lastName=Test, email=admin@gmail.com, balance=1000; firstName=sasha, lastName=zakablukov, email=zakablukov@gmail.com, balance=1000000; firstName=vanya, lastName=Kiselev, email=vanya@gmail.com, balance=777;firstName=Ihor, lastName=Svatok, balance=500;firstName=Test, lastName=Test, email=admingmail.com, balance=1000;firstName=katya, lastName=molotok, email=molotok@gmail.com, balance=777");



var User = function(firstName, lastName, email, balance){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.balance = balance;

    this.isValid = function(){
        return (this.firstName!==undefined) && (this.firstName!=="") && (this.lastName!==undefined) && (this.lastName!=="")
        && (this.email!==undefined) && (this.email.indexOf("@")!==-1) && (isFinite(this.balance));
    }

    this.toString = function(){
      return [this.firstName, this.lastName, this.email, this.balance].join(", ") 
    }

    this.valueOf = function(){
      return this.balance 
    }
}

var initObj = function(string, SomeClass){
    
    var allUsers;
    var objAfterValid = [];
    
    allUsers = string.split(";").map(function(userAtrrStr){
        return userAtrrStr.split(",").reduce(function(result, keyValueString){
            var keyAndValue = keyValueString.split('=');
            result[keyAndValue[0].trim()] = keyAndValue[1].trim();
            return result;
        }, new SomeClass)
    })

    for(var i=0; i<allUsers.length; i++){
      if(allUsers[i].isValid()){
        objAfterValid.push(allUsers[i]);
      }
    }
    return objAfterValid;
}

var UsersCollection = function(user){
  this.users = [].concat(user);

  this.show = function(){
    this.users.forEach(function(element){
      console.log(element);
    });
    return this
  }
  this.size = function(){
    return this.users.length;
  }
  this.add = function(user){
    this.users.push(user);
    return this
  }
  this.remove = function(user){
    for(var i = 0; i < this.users.length; i++){
      if(this.users[i] === user){
        this.users.splice(i, 1);
      }
    }
    return this
  }
  this.addAll = function(usersArray){
    for(var i = 0; i < usersArray.length; i++){
      this.users.push(usersArray[i]);
    }
    return this
  }
  this.clear = function(){
    this.users = [];
    return this
  }
  this.findBy = function(propertyName, propertyValue){
    return this.users.filter(function(element, index) {
      for(var key in element){
        if(key===propertyName && element[key]===propertyValue){
          return element
        }
      }
    });
  }
  /*this.sortBy = function(propertyName, order){
    for(var i = 0; i < this.users.length-1; i++){
      return this.users.sort(function(this.users[i][propertyName], this.users[i+1][propertyName]){
          return (this.users[i+1][propertyName]) - (this.users[i][propertyName]) 
      })
    } 
   }*/
}


var user1 = new User("sasha", "zakablukov", "zak@gmail.com", 900);
var user2 = new User("vanya", "kiselev", "sa@gmail.com", 670);
var user3 = new User("sveta", "ssssaa", "5rete@gmail.com", 900);
var user4 = new User("katya", "bcbcb", "katyaa@gmail.com", 890);

var arrOfObj = initObj(enterStr, User);
console.log(arrOfObj);


var userList = new UsersCollection(user1);
userList.addAll(arrOfObj);
userList.show();
userList.add(user1).add(user2).clear().addAll([user3, user4]).remove(user3).show();
