const app = Vue.createApp(
    {
        data() {
            return {
                keyword: '',
                result: null
            }
        },
        methods: {
            searchGoogleBooks(index) {
                fetch('https://www.googleapis.com/books/v1/volumes/?q=' + this.keyword + "&startIndex=" + index + "&maxResults=20")
                    .then(response => response.json())
                    .then(json => this.result = json)
            }
        }

    })