<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$number = $_POST["number"];
	echo "<h2>Multiplication Table for $number</h2>";
	echo "<table border='1'>";
	echo "<tr><th></th>";
	for ($i = 1; $i <= $number; $i++) {
		echo "<th>$i</th>";
	}
	echo "</tr>";
	for ($i = 1; $i <= $number; $i++) {
		echo "<tr><th>$i</th>";
		for ($j = 1; $j <= $number; $j++) {
			echo "<td>" . $i*$j . "</td>";
		}
		echo "</tr>";
	}
	echo "</table>";
}
?>
