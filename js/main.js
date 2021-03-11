
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
            searchGoogleBooks() {

                this.index = 0
                fetch('https://www.googleapis.com/books/v1/volumes/?q=' + this.keyword + "&startIndex=" + this.index + "&maxResults=20")
                    .then(response => response.json())
                    .then(json => this.result = json)
            },
            NextsearchGoogleBooks() {
                
                this.index += 20
                console.log(this.index)
                fetch('https://www.googleapis.com/books/v1/volumes/?q=' + this.keyword + "&startIndex=" + this.index + "&maxResults=20")
                    .then(response => response.json())
                    .then(json => this.result = json)
            },
            PrevsearchGoogleBooks() {

                this.index -=20
                console.log(this.index)
                fetch('https://www.googleapis.com/books/v1/volumes/?q=' + this.keyword + "&startIndex=" + this.index + "&maxResults=20")
                    .then(response => response.json())
                    .then(json => this.result = json)
            }
        }

    })