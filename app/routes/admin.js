import Route from '@ember/routing/route';

export default Route.extend({
    model(){
    var query = this.get('message');
console.log(query,"query");
    }
});
