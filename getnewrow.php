<?php 
include("database.php");

$sql = "SELECT * FROM submit_trans ORDER BY id DESC LIMIT 1";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
	while($row = mysqli_fetch_assoc($result)) {

		echo json_encode($row);

	}
} else {
	echo "0 results";
}

mysqli_close($conn);
?>