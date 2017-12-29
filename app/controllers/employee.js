import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        Sent: function () {
            var Employee=this.get('Employee');
            console.log(Employee);
            var Assets=this.get('Assets');            
            console.log(Assets);

                var admin="16jpQQChEwhB1tFiYpvd4uWAQxVTzWwT5Vj11W"
                console.log(admin,"admin");
                var data = {"transactiondetails":{
                    "from":admin,
                     "to":Employee,
                     "qty":Assets
                    }}



                    console.log(data,"data");
                return $.ajax({
                    url: 'http://161.202.167.135:3001/sendAsset',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    success: function (response) {
                        console.log(JSON.stringify(response));
                        var message = response.message;
                        console.log("message" + message);
                        myController.transitionToRoute('employee');
                        
                      
                    }
                })
            }
    


    }
});
