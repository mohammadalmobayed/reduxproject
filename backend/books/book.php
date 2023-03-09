<?php
    class Book{

        // conn
        private $conn;

        // table
        private $dbTable = "books";

        // col
        public $id;
        public $book_img;
        public $description;
        public $user_id;
        public $title;
        public $author;
       
        
       
      
        // db conn
        public function __construct($db){
            $this->conn = $db;
        }

        // GET group
        public function getbook(){
            $sqlQuery = "SELECT * FROM " . $this->dbTable;
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        //CREATE User
        public function createbook(){
          
                $sqlQuery = "INSERT INTO
                        ". $this->dbTable ."
                    SET
                    book_img = :book_img, 
                    user_id = :user_id, 
                    title = :title, 
                    author =:author,
                    description = :description";

                $stmt = $this->conn->prepare($sqlQuery);
        
                // sanitize
                $this->book_img=htmlspecialchars(strip_tags($this->book_img));
                $this->user_id=htmlspecialchars(strip_tags($this->user_id));
                $this->title=htmlspecialchars(strip_tags($this->title));
                $this->author=htmlspecialchars(strip_tags($this->author));
                $this->description=htmlspecialchars(strip_tags($this->description));
                
                       
                // bind data
                $stmt->bindParam(":book_img", $this->book_img);
                $stmt->bindParam(":user_id", $this->user_id);
                $stmt->bindParam(":title", $this->title);
                $stmt->bindParam(":author", $this->author);
                $stmt->bindParam(":description", $this->description);
               
                if($stmt->execute()){
                   return true;
                }
                return false;


            
                    
        
            
        }

       // GET User
    //    public function getSingleUser(){
    //     $sqlQuery = "SELECT
    //                 id, 
    //                 user_name, 
    //                 email
    //               FROM
    //                 ". $this->dbTable ."
    //             WHERE 
    //                id = :id
    //             LIMIT 0,1";

    //     $stmt = $this->conn->prepare($sqlQuery);
    //     $stmt->bindParam(":id", $this->id);
    //     $stmt->execute();
    //     $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        
    //     $this->user_name = $dataRow['user_name'];
    //     // $this->last_name = $dataRow['last_name'];
    //     $this->email = $dataRow['email'];
      
    // }      
        

       // UPDATE book
        public function updatebook(){
            $sqlQuery = "UPDATE
                        ". $this->dbTable ."
                    SET
                    book_img = :book_img, 
                    description = :description,
                    title = :title,
                    author = :author,
                    user_id = :user_id
                    
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->book_img=htmlspecialchars(strip_tags($this->book_img));
            $this->description=htmlspecialchars(strip_tags($this->description));
            $this->title=htmlspecialchars(strip_tags($this->title));
            $this->author=htmlspecialchars(strip_tags($this->author));
            $this->user_id=htmlspecialchars(strip_tags($this->user_id));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":book_img", $this->book_img);
            $stmt->bindParam(":description", $this->description);
            $stmt->bindParam(":title", $this->title);
            $stmt->bindParam(":author", $this->author);
            $stmt->bindParam(":user_id", $this->user_id);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

    //    // DELETE User
    //     function deleteUser(){
    //         $sqlQuery = "DELETE FROM " . $this->dbTable . " WHERE id = ?";
    //         $stmt = $this->conn->prepare($sqlQuery);
        
    //         $this->id=htmlspecialchars(strip_tags($this->id));
        
    //         $stmt->bindParam(1, $this->id);
        
    //         if($stmt->execute()){
    //             return true;
    //         }
    //         return false;
    //     }

    
      
    }      
?>