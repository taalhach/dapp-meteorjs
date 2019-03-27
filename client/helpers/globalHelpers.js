const Tx = require('ethereumjs-tx');
Helpers = {}
Helpers.contractAddress="0x1ddEF1f78577FfC17d590F46C3b5eb3825cb6CDE"
Helpers.callcontract = function () {

    currentContract.options.address = Helpers.contractAddress
    Promise.all([
        currentContract.methods.totalSupply().call(),    
        currentContract.methods.name().call()
    ]).then(([_totalSupply,_name])=>{
        Posts.insert({ totalSupply: _totalSupply, name: _name });
    }).catch((err)=>{
        console.log(err)
    })
}


// Helpers.Transfer = function ( fromAddress,toAddress,privateKey) {

    
//     abi = currentContract.methods.transferFrom(fromAddress,toAddress,web3.utils.toWei("0.1","ether")).encodeABI()
//     web3.eth.getTransactionCount(fromAddress).then(function(count){
//         const pk =new Buffer(privateKey.toString(),"hex")
//         //build txobj
//         txObj={
//             nonce:count,
//             to: '0x1ddEF1f78577FfC17d590F46C3b5eb3825cb6CDE',
//             gasLimit:web3.utils.toHex(200000),
//             gasPrice:web3.utils.toHex(2000000000),
//             data:abi
//         }
//         console.log(txObj)
//         // sign transaction
//         var tx = new Tx(txObj)
//         tx.sign(pk)
        
//         // // serialize transaction
//         const stx = tx.serialize()
//         const rawTx = "0x"+stx.toString("hex")
//         // // send transaction 
//         web3.eth.sendSignedTransaction(rawTx).on('receipt',receipt=>{
//             console.log(receipt)
//         })
//     }).catch(console.log)





// }


// Template.registerHelper('callContract',()=>{
    // Promise.all([
    //     currentContract.methods.name().call(),
    // ]).then(
    //     ([
    //     _supply
    // ])=>{

    //     console.log(_supply," air supply")
    //     Session.set("supply",_supply)
    // }
    // ).catch((err)=>{
    //     console.log(err)
    // })
// })