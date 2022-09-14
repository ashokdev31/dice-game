<?php 
//error_reporting(-1);
//ini_set('error_reporting', E_ALL);
// $servername = "localhost";
// $username = "pmauser";
// $password = "Lo01Kergvgt5^7uht5fy6!!";
include('database.php');
//if(isset($_POST['hash'])){
	$hash = $_POST['hash'];
	$betamount =  $_POST['betamount'];
	$winning_chance =  $_POST['winning_chance'];
	$wining_bet_pay =  $_POST['wining_bet_pay'];
	$win_e25 =  $_POST['win_e25'];
	$bet_on_dice_number =  json_decode($_POST['bet_on_dice_number']);
	$betondice=implode(",",$bet_on_dice_number);
	$winresult =  $_POST['winresult'];
	$inaddress =  $_POST['inaddress'];
	$outaddress =  $_POST['outaddress'];
	$device =  $_POST['device'];
	$trans_confirm =  $_POST['trans_confirm'];
	$winloose =  $_POST['winloose'];
	$datee =  date('Y-m-d h:m:s');
	// $transc = file_get_contents('https://api.blockcypher.com/v1/eth/main/txs/'.$hash);
	// $data =  json_decode($transc);
	// $input = $data->inputs[0]->addresses[0];
	// $output = $data->outputs[0]->addresses[0];
	// $gas_price = $data->gas_price;
	// $confirmed = $data->confirmed;
	$query = mysqli_query($conn,"INSERT INTO submit_trans
 (hash, bet_amount, winning_chance,wining_bet_pay,wine,bet_on_dice_number,result,in_address,out_address,date,device,trans_confirm,win_loose) VALUES ('".$hash."','".$betamount."','".$winning_chance."','".$wining_bet_pay."','".$win_e25."','".$betondice."','".$winresult."','".$inaddress."','".$outaddress."','".$datee."','".$device."','".$trans_confirm."','".$winloose."')");

	$sql = "SELECT * FROM users_address where address = '".$inaddress."'";
	$result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result) > 0) {

     while($row = mysqli_fetch_assoc($result)) {
    	$user_visits += $row['user_visits'];
    	$user_visitsid = $row['id'];
    	    
    }
    $user_visits_1 = $user_visits+1;
	$sql1 = mysqli_query($conn,"UPDATE users_address SET user_visits = '".$user_visits_1."' WHERE id = '".$user_visitsid."'");

	} else {
	    $users_address = mysqli_query($conn,"INSERT INTO users_address (address,user_visits) VALUES ('".$inaddress."','1')");
	}

	

	if($query){
		echo $winresult;
	}else{

		echo "Something went wrong with insert query";
	}

//}
?>