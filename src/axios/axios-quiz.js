import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-df6bf.firebaseio.com/'
})