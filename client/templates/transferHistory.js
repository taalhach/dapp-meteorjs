Template.transferHistory.helpers({
    transferHistory:function(){
        return TransferHistory.find({},{sort:{
            blockNumber:-1
        }})
    },
    towei:function(amount){
        return web3.utils.fromWei(amount,"ether")
    }


})