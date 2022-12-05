import axios from 'axios';

const BOARD_API_BASE_URL = "http://43.200.116.196:8080/api/boards/1"; 

class BoardService {
    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }
}

export default new BoardService();