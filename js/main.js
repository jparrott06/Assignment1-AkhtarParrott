
const app = Vue.createApp(
    {
        data() {
            return {
                keyword: '',
                result: null,
                index: 0,
                total: null
            }
        },
        methods: {
            searchGoogleBooks() {

                this.index = 0
                fetch('https://www.googleapis.com/books/v1/volumes/?q=' + this.keyword + "&startIndex=" + this.index + "&maxResults=20")
                    .then(response => response.json())
                    .then(json => this.result = json)
                    .then(console.log(this.result))
                    // .then(this.total = this.result.totalItems)
                this.total = this.result.totalItems
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