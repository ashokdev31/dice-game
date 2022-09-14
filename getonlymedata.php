<?php 
include('database.php');
//if($_POST['address']!= ''){
 $address =$_POST['account'];

$sql = "SELECT * FROM submit_trans where in_address = '".$address."'";
$return_arr = array();
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
	while($row = mysqli_fetch_array($result)) {
		 $rows[]= $row;

	}
	echo json_encode($rows);
} 

?>	

