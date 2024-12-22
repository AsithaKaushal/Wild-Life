<?php
// Connect to the database
include 'db_conn.php';

// Fetch protected areas from the database
$query = "SELECT * FROM protected";
$result = $conn->query($query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protected Areas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<?php include 'navbar.php'; ?>

    
        <h1>Protected Areas in Sri Lanka</h1>

        <table>
            <thead>
                <tr>
                    <th>Area Name</th>
                    <th>Location</th>
                    <th>Size (km²)</th>
                    <th>Protection Level</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Display protected areas from the database
                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $row["area_name"] . "</td>";
                        echo "<td>" . $row["location"] . "</td>";
                        echo "<td>" . $row["size"] . "</td>";
                        echo "<td>" . $row["protection_level"] . "</td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='4'>No areas found.</td></tr>";
                }
                ?>
            </tbody>
        </table>

        <!-- CRUD operations for admins (Add, Edit, Delete) -->
        <a href="add_area.php" class="button">Add New Area</a>
    

    <footer>
        <p>&copy; 2024 Wildlife in Sri Lanka</p>
    </footer>
</body>
</html>

<?php
// Close the connection
$conn->close();
?>
