FlowRouter.route('/',{
    action:function(params,queryParams){
        BlazeLayout.render('layout',{header:"header",body:"home"})
    }
})
FlowRouter.route('/transfer',{
    action:function(params,queryParams){
        BlazeLayout.render('layout',{header:"header",body:"transaction"})
    }
})
FlowRouter.route('/transferHistory',{
    action:function(params,queryParams){
        BlazeLayout.render('layout',{header:"header",body:"transferHistory"})
    }
})