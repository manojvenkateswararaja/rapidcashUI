import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        Submit: function () {
            var Name=this.get('Name');
            console.log(Name);
            var password=this.get('password');
            var myController = this;
            
            console.log(password);

            if(Name=="admin"){
                var admin="16jpQQChEwhB1tFiYpvd4uWAQxVTzWwT5Vj11W"
                console.log(admin,"admin");
                 myController.transitionToRoute('employee');
               
            }
            else if(Name=="employee"){
                // var voter="18qbK7c6XxPL1UmBzjjy3y3s6ts5Qi1jfZDz7u"
                // console.log(voter,"voter");
                // var data = {"address":Name}
            
                        myController.transitionToRoute('admin');
                       

                      
            }
            
        }
    }
});
