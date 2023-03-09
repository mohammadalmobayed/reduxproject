import axios from 'axios';

const API_URL = "http://localhost/library/backend/books";


class BookService {

    getBook(){
        return axios.get(`${API_URL}/read.php`);
    }
    getUserBook(user_id){
        return axios.post(`${API_URL}/userbook.php`,user_id);
    }

    createBook(book){
        return axios.post(`${API_URL}/create.php`, book);
    }
  

    getBookById(id){
        return axios.get(`${API_URL}/single_book.php?id=${id}`);
    }
    findBook(book){
        return axios.post(`${API_URL}/finduser.php`, book);

    }

    updateBook(book){
        return axios.post(`${API_URL}/update.php`, book);
   
    }
  

    deleteBook(id){
        return axios.post(`${API_URL}/delete.php`, id);
    }
}

export default new BookService()