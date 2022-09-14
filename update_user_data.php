<?php 

include('database.php');

if(isset($_POST['hash']) && $_POST['status'] == 'yes'){
	$hash = $_POST['hash'];
	$result_hash = $_POST['result_hash'];
	$sql = "SELECT * FROM submit_trans where hash ='".$hash."'";
	$result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result) > 0) {

     while($row = mysqli_fetch_assoc($result)) {
    	echo $user_visitsid = $row['id'];
    	    
    }

	}
	$query = mysqli_query($conn,"UPDATE submit_trans SET trans_confirm = 'yes' , result_hash = '".$result_hash."' WHERE id = '".$user_visitsid."'");

	if($query){
		//echo $uncollected_winning;
		echo "Updated successfully";
	}else{

		echo "Something went wrong with update query";
	}
}else if(isset($_POST['hash']) && $_POST['status'] == 'no'){

	 $hash = $_POST['hash'];
     $sql = "SELECT * FROM submit_trans where hash ='".$hash."'";
	$result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result) > 0) {

     while($row = mysqli_fetch_assoc($result)) {
    	echo $user_visitsid = $row['id'];
    	    
    }
	}
	$query = mysqli_query($conn,"UPDATE submit_trans SET trans_confirm = 'no'  WHERE id = '".$user_visitsid."'");

	if($query){
		//echo $uncollected_winning;
		echo "Updated successfully";
	}else{

		echo "Something went wrong with update query";
	}
}



?>