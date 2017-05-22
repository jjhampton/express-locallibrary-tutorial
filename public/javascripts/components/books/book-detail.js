class BookDetailController {
    constructor($routeParams, bookService) {
        this.$routeParams = $routeParams;
        this.bookService = bookService;
    }

    $onInit() {
        this.id = this.$routeParams.id;
        this.bookService.getBookDetail(this.id).then(result => {
            console.log('result from API  all', result.data);
            this.book = result.data.book;
            this.instances = result.data.instances;
        });
    }
}

const BookDetailComponent = {
    restrict: 'E',
    controller: BookDetailController,
    templateUrl: '/books/book-detail.html'
};

angular.module('app').component('bookDetail', BookDetailComponent);