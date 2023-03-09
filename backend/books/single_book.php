<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: *");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    include_once '../config.php';
    include_once './book.php';

    $database = new DB();
    $db = $database->getConnection();
    $id = $_GET["id"];
    // $data = json_decode(file_get_contents("php://input"));
    // $id=$data->id;

    $sqlQuery = "SELECT * FROM books WHERE id = $id" ;
            $stmt = $db->prepare($sqlQuery);
            $stmt->execute();
    $books = $stmt->fetchAll(PDO::FETCH_ASSOC);
    print_r(json_encode( $books));
    
?>