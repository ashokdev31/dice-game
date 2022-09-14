<?php

include('database.php');

$sql = "SELECT * FROM submit_trans";
	$result = mysqli_query($conn, $sql);

	echo mysqli_num_rows($result);

?>