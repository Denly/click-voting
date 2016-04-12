//KPower = new Meteor.Collection('kpower');
//LPower = new Meteor.Collection('lpower');
Vot = new Meteor.Collection('vot');


if (Meteor.isClient) {
  
}

if (Meteor.isServer) {
	if (Vot.find().fetch().length<=1) {
  Vot.insert({Ks:48309,Ls:17668});
 // Vot.insert({Ls:0});
};
	console.log(Vot.find().Kvot);
  Meteor.startup(function () {
    // code to run on server at startup
  });
  Meteor.methods({
  	
  });
}
