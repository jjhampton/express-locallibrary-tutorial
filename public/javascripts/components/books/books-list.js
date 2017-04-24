class BooksListController {
    constructor(booksService) {
        this.booksService = booksService;
    }

    $onInit() {
        this.booksService.getBooks().then(result => {
            this.books = result.data;
        });
    }
}

const BooksListComponent = {
    restrict: 'E',
    controller: BooksListController,
    templateUrl: '/books/books-list.html'
};

angular.module('app').component('booksList', BooksListComponent);