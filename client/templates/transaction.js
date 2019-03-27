const Tx = require('ethereumjs-tx');
Template.transaction.created=function(){
    var temlate=this
    TemplateVar.set(temlate,"txhash","") 
    TemplateVar.set(temlate,"status","")
    TemplateVar.set(temlate,"display",false)
     
    

}
Template.transaction.events({
    'submit #transferFrom':(event,template)=>{
        event.preventDefault();
        const target = event.target
        const fromAddress=target.fromAdd.value
        const privateKey=target.pk.value
        const toAddress =target.toAdd.value
        const amount =target.amount.value
        if (web3.utils.isAddress(fromAddress)&&web3.utils.isAddress(toAddress)){
            var temlate=Template.instance()
            abi = currentContract.methods.transfer(toAddress,web3.utils.toWei(amount,"ether")).encodeABI()
            web3.eth.getTransactionCount(fromAddress).then(function(count){
                const pk =new Buffer(privateKey.toString(),"hex")
                 //build txobj
                txObj={
                    nonce:count,
                    to: Helpers.contractAddress,
                    value:'0x0',
                    gasLimit:web3.utils.toHex(200000),
                    gasPrice:web3.utils.toHex(2000000000),
                    data:abi
                }
                // sign transaction
                var tx = new Tx(txObj)
                tx.sign(pk)
                // serialize transaction
                const stx = tx.serialize()
                const rawTx = "0x"+stx.toString("hex")
                // send transaction 
                web3.eth.sendSignedTransaction(rawTx)
                .on('transactionHash',hash=>{
                    console.log(hash)
                    TemplateVar.set(temlate,"txhash",hash) 
                    TemplateVar.set(temlate,"status","Pending") 
                    TemplateVar.set(temlate,"display",true)
                    }).on('receipt',receipt=>{
                        console.log(receipt.events,receipt )
                        TemplateVar.set(temlate,"txhash",receipt.transactionHash)
                        TemplateVar.set(temlate,"status","Confirmed")
                        TemplateVar.set(temlate,"display",true)
  
                })

            }).catch(console.log)
        target.fromAdd.value=''
        target.pk.value=''
        target.toAdd.value=''
        target.amount.value=''
        
        }else{
            console.log("not a valid address")
        }

    }
})