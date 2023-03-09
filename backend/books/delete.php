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

    $book = new Book($db);
    // $data = json_decode(file_get_contents("php://input"));
    // $id=$data->id;
    
    // print_r(json_encode($_POST['id']));
    // exit;
    $book->id=$_POST['id'];
    
    

    if($book->deleteBook()){
        echo json_encode("book created.");

    } else{
        echo json_encode("Failed to create book.");
    }
?>