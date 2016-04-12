

var GetTheDate = function(){
var fullDate = new Date();
console.log(fullDate);
//Thu May 19 2011 17:25:38 GMT+1000 {}
  
//convert month to 2 digits
var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
  
var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear()+"-"+fullDate.toTimeString();
console.log(currentDate);
//19/05/2011
return currentDate;
}



Template.hello.events({
    'click .Kbtn': function () {
    	//var _id = KPower.insert(1);

      var tmp = Vot.find().fetch()[0].Ks+1;
      var theId = Vot.find().fetch()[0]._id;
      Vot.update(theId,{$set:{Ks:tmp}});
      
      // template data, if any, is available in 'this'
      
    },
    'click .Lbtn': function () {
    	//var _id = LPower.insert(1);

      var tmp = Vot.find().fetch()[0].Ls+1;
      var theId = Vot.find().fetch()[0]._id;
      Vot.update(theId,{$set:{Ls:tmp}});

      // template data, if any, is available in 'this'
      
    }
  });

Template.field.helpers({	
  'NKpowerVot':function(){
    var tmpp = Vot.find().fetch()[0].Ks;
    return tmpp;
  },
  'NLpowerVot':function(){
    var tmpp = Vot.find().fetch()[0].Ls;
    return tmpp;
  }
});

