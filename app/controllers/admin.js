import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        Submit: function () {
            var id=this.get('id');
            console.log(id);
          
                var data = {"address":id}
                var myController = this;
            
                return $.ajax({
                    url: 'http://localhost:3001/getbalance',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    success: function (response) {
                        console.log(JSON.stringify(response));
                        var message = response.assetdetails;
                        console.log("message" + message);
                        myController.set('employee',message);
                     

                      
                    }
                })
            }
         

    }
});
