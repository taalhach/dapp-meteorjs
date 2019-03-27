Template.home.created=()=>{
    let len=Posts.find().fetch().length
    console.log(len,Number(len)==0)
    if (Number(len)===0){
       Helpers.callcontract()    
    }  
}

Template.home.helpers({
    getTotalSupply:()=>{
        arr=Posts.find({},{fields:{
            totalSupply:1
        }}).fetch()
        if (arr[0]){
            return web3.utils.fromWei(arr[0].totalSupply.toString(),"ether")
        }
        return ""
    },
    getName:()=>{
        arr=Posts.find({},{
            fields:{
                name:1
            }
        }).fetch()
        if (arr[0]){

        return arr[0].name
        }
        return ""  
    }
})