jQuery( document ).ready(function( $ ) {
	if(typeof web3 !== 'undefined') {
		web3 = new Web3(web3.currentProvider);

	} else {
		//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

	}
	if(!web3.isConnected()) {
		alert("To connect to metamask");
		$("#loadingText").html("To connect to metamask");

	}
	web3.eth.getAccounts(function(error, accounts) {
		if (!error) {

			web3.eth.getBalance(accounts[0], function(error, balance) {
				if (!error) {
					jQuery('#loadingSpinner').removeClass('active');
					jQuery('#loadingSpinner').addClass('inactive');
					console.log(accounts[0]);
					$(".addressget").val(accounts[0]);
					startApp(web3);
				} else {
					console.error(error);
				}
			});
		} else {
			
			window.setTimeout(function(){
				$("#loadingText").html("Please install metamask or trusted wallet to access your account. You can check it out here <a href='https://metamask.io/' target='_blank'> metamask.io </a>");
			}, 5000);

		}
	});

});
function startApp(web3) {
	
	var abi =[{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"_referredBy","type":"address"}],"name":"buy","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"incomingEthereum","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"},{"indexed":true,"name":"referredBy","type":"address"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"tokensBurned","type":"uint256"},{"indexed":false,"name":"ethereumEarned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumReinvested","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"constant":false,"inputs":[],"name":"disableInitialStage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"payCharity","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_identifier","type":"address"},{"name":"_status","type":"bool"}],"name":"setAdministrator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_value","type":"bool"}],"name":"setCanAcceptTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"setStakingRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_symbol","type":"string"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_toAddress","type":"address"},{"name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"administrators","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokensToSell","type":"uint256"}],"name":"calculateEthereumReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethereumToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"canAcceptTokens_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"etherToSendCharity","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"giveEthCharityAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"onlyAmbassadors","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthCharityCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthCharityRecieved","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthereumBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
	

	var web3 = new Web3(web3.currentProvider);  
	var token = web3.eth.contract(abi).at("0x57945710b10d761f1118ef9c564f8ee67b61b46a");

}
function onBuyButtonSubmit(){
	$("#getres").css('display','block');
	$("#maindice").css('display','none');
	var abi =[{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"_referredBy","type":"address"}],"name":"buy","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"incomingEthereum","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"},{"indexed":true,"name":"referredBy","type":"address"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"tokensBurned","type":"uint256"},{"indexed":false,"name":"ethereumEarned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumReinvested","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"constant":false,"inputs":[],"name":"disableInitialStage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"payCharity","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_identifier","type":"address"},{"name":"_status","type":"bool"}],"name":"setAdministrator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_value","type":"bool"}],"name":"setCanAcceptTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"setStakingRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_symbol","type":"string"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_toAddress","type":"address"},{"name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"administrators","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokensToSell","type":"uint256"}],"name":"calculateEthereumReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethereumToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"canAcceptTokens_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"etherToSendCharity","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"giveEthCharityAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"onlyAmbassadors","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthCharityCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthCharityRecieved","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthereumBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

	// web3.eth.contract(abi).at(address).myTokens(,function (err,result) {


 //    });

 var get_dice_val=[];
 $("label[data-checked=true]").each(function(){
 	get_dice_val.push($(this).attr('data-val'));
 });

 var bet_on_dice_number = (get_dice_val);
 var winning_chance = $(".chgewin").html();
 var winbetpay = $(".winbetpay").html();
 var win_e25 = $(".win").html();
 var betamount = $(".getinval").val();
 var min=1; 
 var max=7;  
 var winresult =Math.floor(Math.random() * (+max - +min)) + +min; 
 var val = (betamount * 1000000000000000000);
//alert(val);

web3.eth.getAccounts(function(error, accounts) {
	var account  = accounts[0];

	web3.eth.contract(abi).at("0x57945710b10d761f1118ef9c564f8ee67b61b46a").transfer('0x550D2Cde44eF5Aa44e8D55Aac935FbbaE2548FAD',val,function (err,result) {
		if(err){
			console.log(err);
			$("#getwin").css('display','none');
			$("#maindice").css('display','block');
			$("#getres").css('display','none');

		}else{
			$("#savehash").val(result);
			waitForReceipt(result);
			function waitForReceipt(result){
				web3.eth.getTransactionReceipt(result,function(err,receipt){

					if (err) {
						error(err);
						$("#getwin").css('display','none');
						$("#maindice").css('display','block');
						$("#getres").css('display','none');

					}

					if (receipt !== null) {
						console.log(receipt);
						if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

							var device = 'mobile';

						}else{
							var device = 'desktop';
						}


						
						$.map(bet_on_dice_number, function(elementOfArray, indexInArray) {
							if (elementOfArray == winresult) {

								var winloose = 1;
								$("#winloose").val(winloose);


								
							}else{
								var winloose = 0;
								$("#winloose").val(winloose);
							}
						});


						$.ajax({
							type : "POST",
							url : "http://web1.kindlebit.com/dice/controller.php",
							data : {hash:result,betamount:betamount,winning_chance:winning_chance,wining_bet_pay:winbetpay,win_e25:win_e25,bet_on_dice_number:JSON.stringify(bet_on_dice_number),winresult:winresult,inaddress:account,outaddress:'0x550D2Cde44eF5Aa44e8D55Aac935FbbaE2548FAD',device:device,trans_confirm:'no',winloose:$("#winloose").val()},
							success : function(data) {

								$.each(bet_on_dice_number, function(index, value){
									var getaval = value-1;
									$("#res1").append('<label class="dice-option option-'+getaval+'" data-checked="true" data-val="'+value+'"></label>');
								});
								var dataresult = data -1;
								$("#playbet").css('display','block');
								$("#getres").css('display','none');
								if(jQuery.inArray(data, bet_on_dice_number) !== -1){
									$("#getlosewin").html("You Won!");
									$("#getwin").css('display','block');
									$("#maindice").css('display','none');
									$(".amount1").html(win_e25);
									$("#res").html('<label class="dice-option option-'+dataresult+'" data-checked="true" data-val="'+data+'"></label>');

////////////********Tranfer token to user**********///////////////////
var fromaddress = "0x550D2Cde44eF5Aa44e8D55Aac935FbbaE2548FAD";
var address = "0x57945710b10d761f1118ef9c564f8ee67b61b46a";
web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/242b9c3ac5be4b2fb523d51f4c2bddca"));
var transferAddress = account;
var transferTokenCount = data;
var val123 = web3.toBigNumber(win_e25 * 1000000000000000000);
web3.eth.contract(abi).at(address).myTokens({from:fromaddress},function (err,result) {
	if(parseFloat(val123)<=parseFloat(result)){
		web3.eth.getTransactionCount(fromaddress, function (err, nonce) {
			var token= web3.eth.contract(abi).at(address);
			var data =token.transfer.getData(transferAddress,val123,{from:fromaddress});
			var gasPrice = web3.eth.gasPrice;
			var  gasPriceHex = web3.toHex(gasPrice);
			var   gasLimitHex = web3.toHex(300000);
			var privateKey = new EthJS.Buffer.Buffer('EE42F2A089FF16F93C8D8504218BC244E23CF6840F17F5376C8B8431404804B5', 'hex');
			var txParams = {
				nonce:    nonce,
				gasPrice: gasPriceHex,
				gasLimit: gasLimitHex,
				to:       address, 
				data:     data
			}
			var tx = new EthJS.Tx(txParams)
			tx.sign(privateKey)
			var serializedTx = '0x' +tx.serialize().toString('hex')
			web3.eth.sendRawTransaction(serializedTx.toString('hex'), function (err, hash) {
				if(err){
					alertify.log(err);
					var hashresult = $("#savehash").val();
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

						var device = 'mobile';

					}else{
						var device = 'desktop';
					}
					var status = "no";
					$.ajax({
						type : "POST",
						url : "http://web1.kindlebit.com/dice/update_user_data.php",
						data : {hash:hashresult,status:status,device:device,result_hash:hash},
						success : function(data1) {
							if(data1){
								var obj = JSON.parse(data1);



							}
						}
					});
				}else{
					alertify.log('Transfer\x20order\x20has\x20been\x20transmitted\x20to\x20the\x20blockchain.\x20Awaiting\x20confirmation..');

					var hashresult = $("#savehash").val();
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

						var device = 'mobile';

					}else{
						var device = 'desktop';
					}
					var status = "yes";
					$.ajax({
						type : "POST",
						url : "http://web1.kindlebit.com/dice/update_user_data.php",
						data : {hash:hashresult,status:status,device:device,result_hash:hash},
						success : function(data1) {
							if(data1){
								var obj = JSON.parse(data1);
							}
						}
					});

				}


			});

		});
	}
});

/////////////******************************************////////////////////
}else{
	$("#getlosewin").html("Sorry Try Again!");
	$("#getwin").css('display','block');
	$("#maindice").css('display','none');
	$(".amount1").html("0.00 ");
	$("#res").html('<label class="dice-option option-'+dataresult+'" data-checked="true" data-val="'+data+'"></label>');

}

}
});


}else {
	window.setTimeout(function () {
		waitForReceipt(result);
	}, 1000);
}
});
}		
}
});
});





}


var rereshdata = function() {

	$.ajax({
		type : "GET",
		url : "http://web1.kindlebit.com/dice/count_rows.php",
		success : function(data1) {
			var rowcount = data1;
			var storeval =  $(".storerow").val();
			if(storeval == ''){

				var storeval =  $(".storerow").val(rowcount); 

			}else{

				var storeval =  $(".storerow").val();

			}
			if(rowcount > storeval){
				$.ajax({
					type : "GET",
					url : "http://web1.kindlebit.com/dice/getnewrow.php",
					success : function(res) {

						if(res){

							var obj = JSON.parse(res);
							if(obj.win_loose == '1'){
								var winloose = '<span class="win"><span class="ethers">'+obj.wine+'</span></span>';
								var cla = "won";
							}else{

								var winloose = '<span class="lose">-</span>';
								var cla = "";
							}
							var array = obj.bet_on_dice_number.split(",");
							var getbetamount = '<span class="bet dice">';
							for(var i=0;i<array.length;i++){
								var explode = array[i]-1;
								getbetamount+= '<i class="dice-option option-'+explode+'"></i>';
							}

							console.log(getbetamount);
							$('#getlist li:eq(0)').before("<li class='settled "+cla+"'><span class='address'><a href='https://ropsten.etherscan.io/tx/"+obj.hash+"'>"+obj.hash+"</a></span><span class='amount'><span class='ethers'>"+obj.bet_amount+"</span></span>"+getbetamount+"</span><span class='result dice'><i class='dice-option option-"+(parseInt(obj.result)-1)+"'></i></span>"+winloose+"<span class='jackpot'>—</span></li>");
				// console.log(obj.bet_amount);
				// console.log(obj.result);
				// console.log(obj.hash);
				// console.log(obj.bet_on_dice_number);
				// console.log(obj.wine);
				var getval = $(".storerow").val();
				var storenew = parseInt(getval)+1;
				$(".storerow").val(storenew); 

			}
		}
	});   

			}


			
		}
	});




	setTimeout(rereshdata, 1000);

}

setTimeout(rereshdata, 1000);

function onplayagain(){
	location.reload();
}

function onlyme(){

	$("#showall").hide();
	$("#checkusers").show();
	$("#getlist1").empty('li');
	var addressget = $(".addressget").val();
	$.ajax({
		type : "POST",
		url : "http://web1.kindlebit.com/dice/getonlymedata.php",
		data : {account:addressget},
		success : function(data1) {
			if(data1){
            var obj = JSON.parse((data1));
          
			for(var i=0;i<obj.length;i++){

				var gethash =(obj[i]['hash']);
				var bet_amount =obj[i]['bet_amount'];
				var res =parseInt(obj[i]['result'])-1;
				if(obj[i]['win_loose'] == '1'){
					var winloose = '<span class="win"><span class="ethers">'+obj[i]['wine']+'</span></span>';
					var cla = "won";
				}else{

					var winloose = '<span class="lose">-</span>';
					var cla = "";
				}
				
                var array = obj[i]['bet_on_dice_number'].split(",");

				var getbetamount = '<span class="bet dice">';
				for(var i=0;i<array.length;i++){
					var explode = array[i]-1;
					getbetamount+= '<i class="dice-option option-'+explode+'"></i>';
				}

				var append = ("<li class='settled "+cla+"'><span class='address'>"+gethash+"</a></span><span class='amount'><span class='ethers'>"+bet_amount+"</span></span>"+getbetamount+"</span><span class='result dice'><i class='dice-option option-"+(res)+"'></i></span>"+winloose+"<span class='jackpot'>—</span></li>");

				

			}
			$(".getusers").append(append);

			}

		}
	});



}
function onlyurs(){

	$("#showall").show();
	$("#checkusers").hide();

}


document.getElementById("place_bet").addEventListener("click", onBuyButtonSubmit);
document.getElementById("playagain").addEventListener("click", onplayagain);
document.getElementById("onlyme").addEventListener("click", onlyme);
document.getElementById("onlyurs").addEventListener("click", onlyurs);