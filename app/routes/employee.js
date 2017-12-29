import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var myController = this.controllerFor('employee')
        return $.ajax({
            url: 'http://192.168.0.42:3001/getAddress',
            type: 'GET',
            contentType: 'application/json',
            data: JSON.stringify(""),
            success: function (response) {
                console.log(JSON.stringify(response));
                var message = response.address;
                console.log("message" + message);
                myController.set("message",message)
                
              
            }      
           
        })
    }
})
