app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }
    },
    template:
    /*html*/
    `<ul class="col-sm-12 col-md-6 col-xl-4 bookinfo" v-if="this.bookObj.volumeInfo.title != null">
    <a class="list-group-item list-group-item-action active" :href ="this.bookObj.volumeInfo.infoLink" target="_blank" v-if="this.bookObj.volumeInfo.imageLinks != undefined"><img class="thumbnail" :src= "this.bookObj.volumeInfo.imageLinks.smallThumbnail"></a>
    <a class="list-group-item list-group-item-action active" v-if="this.bookObj.volumeInfo.title != undefined" :href ="this.bookObj.volumeInfo.infoLink" target="_blank">{{this.bookObj.volumeInfo.title}}</a>
    <li class="list-group-item active auth" v-if="this.bookObj.volumeInfo.authors != undefined">By: {{this.bookObj.volumeInfo.authors.toString()}}</li>
    <li class = "list-group-item" v-if="this.bookObj.volumeInfo.publisher != undefined">Publisher: {{this.bookObj.volumeInfo.publisher}}</li>
    <li class = "list-group-item" v-if="this.bookObj.volumeInfo.publishedDate != undefined">Published Date: {{this.bookObj.volumeInfo.publishedDate}}</li>
    <li class="list-group-item" v-if="this.bookObj.volumeInfo.pageCount != undefined">{{ this.bookObj.volumeInfo.pageCount }} pages</li>
    <li class="list-group-item" v-if="this.bookObj.volumeInfo.averageRating != null">{{ this.bookObj.volumeInfo.averageRating }} <i class="fa fa-star" style="color:gold"></i> rating</li>
    <li class="list-group-item" v-if="this.bookObj.volumeInfo.title != undefined && this.bookObj.volumeInfo.title.length > 0"><a :href="'https://amazon.com/s?k=' + this.bookObj.volumeInfo.title + '&ref=nb_sb_noss'" target="_blank" class="btn btn-primary">Buy on Amazon</a></li>
    </ul>`,
    computed:
    {
        bookObj() {
            if (this.book != null)
                return JSON.parse(this.book)
            else
                return null;
        }
    }

})