class BookListController {
    constructor(booksService) {
        this.booksService = booksService;
    }

    $onInit() {
        this.booksService.getAllBooks().then(result => {
            this.books = result.data;
        });
    }
}

const BookListComponent = {
    restrict: 'E',
    controller: BookListController,
    templateUrl: '/books/book-list.html'
};

angular.module('app').component('bookList', BookListComponent);