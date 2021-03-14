
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

                // var txtSearch = document.querySelector("#txtSearch")

                // if(txtSearch.value == "") {
                //     document.querySelector("#mainDiv").classList.add("hasError")
                //     document.querySelector("#mainDiv").innerHTML = "No search keyword provided..."
                //     return;

                // }
    
                // document.querySelector("#mainDiv").classList.remove("hasError")

                this.index = 0
                fetch('https://www.googleapis.com/books/v1/volumes/?q=' + this.keyword + "&startIndex=" + this.index + "&maxResults=20")
                    .then(response => response.json())
                    .then(json => this.result = json)
                    .then(json => this.total = json)
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