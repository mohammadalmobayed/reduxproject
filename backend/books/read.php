<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");
    
    include_once '../config.php';
    include_once './book.php';

    $database = new DB();
    $db = $database->getConnection();

    $books = new Book($db);

    $stmt = $books->getbook();
    $books = $stmt->fetchAll(PDO::FETCH_ASSOC);
    print_r(json_encode( $books));
    // $itemCount = $stmt->rowCount();

    // if($itemCount > 0){
        
    //     $userArr = array();
       
    //     while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    //         extract($row);
    //         $e = array(
    //             "id" => $id,
    //             "user_name" => $user_name,
    //             // "last_name" => $last_name,
    //             "password" => $password,
    //             "photo" => $photo,
    //             "email" => $email
    //         );

    //         array_push($userArr, $e);
    //     }
    //     echo json_encode($userArr);
    // }
    // else{
    //     echo json_encode('');
    // }

?>