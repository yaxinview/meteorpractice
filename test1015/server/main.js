//import { Meteor } from 'meteor/meteor';

//Meteor.startup(() => {
  // code to run on server at startup
//});


Meteor.publish('snippets',function(){
    return Snippets.find({owner:this.userId});
});

Meteor.publish('snippets-admin',function(){
    return Snippets.find({});
});



Snippets.allow({
    insert: function(userId,fields) {
        return(userId);//make sure user is logged in.
    },
    update: function(userId,fields){
        return(userId);
    }
})