
const app = Vue.createApp(
    {
        data() {
            return {
                keyword: '',
                result: null,
                index: 0
            }
        },
        methods: {
            searchGoogleBooks(index) {

                this.index = 0
                fetch('https://www.googleapis.com/books/v1/volumes/?q=' + this.keyword + "&startIndex=" + index + "&maxResults=20")
                    .then(response => response.json())
                    .then(json => this.result = json)
            },
            NextsearchGoogleBooks(index) {

                this.index += 20
                fetch('https://www.googleapis.com/books/v1/volumes/?q=' + this.keyword + "&startIndex=" + index + "&maxResults=20")
                    .then(response => response.json())
                    .then(json => this.result = json)
            },
            PrevsearchGoogleBooks(index) {

                this.index -=20
                fetch('https://www.googleapis.com/books/v1/volumes/?q=' + this.keyword + "&startIndex=" + index + "&maxResults=20")
                    .then(response => response.json())
                    .then(json => this.result = json)
            }
        }

    })