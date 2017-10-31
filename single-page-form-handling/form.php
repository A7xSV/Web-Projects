<?php 
$name  = false;
$phone = false;
$email = false;

if (isset($_POST['name'])) {
  $name = $_POST['name'];
}
if (isset($_POST['phone'])) {
  $phone = $_POST['phone'];
}
if (isset($_POST['email'])) {
  $email = $_POST['email'];
}
if ($name != false) {
  try {
    $connect = new PDO($dbname, $user, $password);
    $query = $connect->prepare("INSERT INTO table_name (Name, Phone, Email) VALUES ('$name', $phone, '$email')");
    $query->execute();
    echo '<div class="container"><hr><small class="text-muted">Submission Succesful !</small><br><br>';
    echo '<table class="table table-striped"><tr><th>Field<th>Value</th></tr>';
    echo '<tr><td>Name<td>'    . $name  . '</tr>';
    echo '<tr><td>Phone<td>'   . $phone . '</tr>';
    echo '<tr><td>Email<td>'   . $email . '</tr></table>';
    echo '<hr><table class="table table-striped"><tr><th>Name<th>Phone<th>Email</tr>';

    $sql = 'SELECT Name, Phone, Email FROM table_name ORDER BY Name';
    foreach ($connect->query($sql) as $row) {
      echo '<tr><td>' . $row['Name'] . '<td>' . $row['Phone'] . '<td>' . $row['Email'] . '</tr>';
    }
    echo '</table></div>';
  } 
  catch (PDOException $e) {
    print $e->getMessage() . "<br/>";
    die();
  }
  return;
}
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Form</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  </head>
  <body>
    <div id="page-wrapper" >
      <div class="container" >
        <h2 align="center">DETAIL FORM</h2>
        <form name="myForm" class="form-horizontal" id ="myform" action="" method="POST">
          <div class="panel panel-info">
            <div class="panel-heading">Enter Details</div>
            <div class="panel-body">
              <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name" class="col-md-4">Name*</label>
                      <div class="col-md-6">
                        <input type="text" id="name" class="form-control" name="name" pattern="[A-zs]+" placeholder="Enter Name" required>
                        <small id="nameHelp" class="text-muted">Alphabets only</small>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="mobile" class="col-md-4">Mobile*</label>
                      <div class="col-md-6">
                        <input type="text" id="mobile" class="form-control" name="phone" pattern="[0-9]{10}" placeholder="Enter Mobile Number" required>
                        <small id="phoneHelp" class="text-muted">10 digit number</small>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="email" class="col-md-4">Email </label>
                      <div class="col-md-6">
                        <input type="email" id="email" class="form-control" name="email" pattern=".+@domain.com" placeholder="Enter Email">
                        <small id="emailHelp" class="text-muted">yourEmail@<b>domain.com</b></small>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-md-offset-4">
            <center>
              <input type="submit" class="btn btn-primary" value="Submit">&nbsp;
              <input type="reset" class="btn" value="Reset" onclick="hideTable()">
            </center>
          </div>
        </form>
      </div>
      <div id="success">
      </div>
    </div>
    <script>
      // Intercept the form submission
      $("#myform").on("submit", function() {
      // Serialize all form data
      var formdata = $(this).serialize();
      // Post data to PHP script
      $.post("./new.php", formdata, function(data) {
        // Act upon the data returned, setting it to #success <div>
        $("#success").html(data);
        });
      // Prevent the form from actually submitting
      return false;
      });

      function hideTable() {
        $("#success").html("");
      }
    </script>
  </body>
</html>