angular.module('devMtnApp').service('mainSVC', function(){
  var youAre = {
    "friendID": "0000"
  }

  this.getYou = function(){
    return youAre;
  }

  this.getUser = function(friendID){
    var user = undefined;
    for(var i = 0; i<usersList.length; i++){
      var thisUser = usersList[i];
      if(thisUser.friendID === friendID){
        user = thisUser;
        console.log('user:', user);
      }
    }
    return user;
  }

  this.logIn = function(name,tagline,url,bio){
    youAre.name = name;
    youAre.tagline = tagline;
    youAre.url = url;
    youAre.bio = bio;
  }

  this.getUsers = function(){
    return usersList;
  }

  var usersList = [
    {
      "friendID": "0001",
      "name": "James Smith",
      "tagline": "If nothing else, be yourself",
      "imgURL": "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg",
      "bio": "James Smith ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "friends": ["0002","0004"]
    },
    {
      "friendID": "0002",
      "name": "John Doe",
      "tagline": "Have yourself a merry little Christmas",
      "imgURL": "https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg",
      "bio": "John Doe ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "friends": ["0003","0005"]
    },
    {
      "friendID": "0003",
      "name": "Jane Smithenson",
      "tagline": "Word to your mother",
      "imgURL": "https://s3.amazonaws.com/uifaces/faces/twitter/ritu/128.jpg",
      "bio": "Jane Smithenson ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "friends": ["0001","0002","0006"]
    },
    {
      "friendID": "0004",
      "name": "Roberta Grobens",
      "tagline": "Smile first, shoot later",
      "imgURL": "https://s3.amazonaws.com/uifaces/faces/twitter/towhidzaman/128.jpg",
      "bio": "Roberta Grobens ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "friends": ["0002","0003","0004"]
    },
    {
      "friendID": "0005",
      "name": "Graciela Banderas",
      "tagline": "Si quieres mi corazon, demuestrame tu inteligencia",
      "imgURL": "https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg",
      "bio": "Graciela Banderas ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "friends": ["0001","0002","0003","0004"]
    },
    {
      "friendID": "0006",
      "name": "WHO AM I",
      "tagline": "I'm being totally serious",
      "imgURL": "https://s3.amazonaws.com/uifaces/faces/twitter/mattsince87/128.jpg",
      "bio": "Like, who the hell am I? WHY AM I HERE?? ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }
  ]
})
