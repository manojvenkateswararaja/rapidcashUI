import Route from '@ember/routing/route';

export default Route.extend({
    actions:{
        Submit: function () {
            var Name=this.get('Name');
            console.log(Name);
            var password=this.get('password');

            console.log(password);
            // var partyAaddr="5252"
            // this.set('partyAaddr',partyAaddr)
            // console.log(partyAaddr);
            var transactiondetails={    
                "transactiondetails":
                {"partyA":
                    {"Name":Name,
                    "password":password
                }
             }
    }

    console.log("data" + JSON.stringify(transactiondetails));

    return $.ajax({
         url: 'http://192.168.0.8:3001/saveVoteA',
         type: 'POST',
         contentType: 'application/json',
         data: JSON.stringify(transactiondetails),
         success: function (response) {
             console.log(JSON.stringify(response));
             var message = response.message;
             console.log("message" + message);
             if (message == "voted sucessfully!"){
                 console.log(">>>>>>>>>>>>>>>>>>>>in")
                         mycontroller.set('isShowingModal',true);
             }
         }
     })
}
    }
});
