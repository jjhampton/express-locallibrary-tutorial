class BookInstanceDetailController {
    constructor($routeParams, bookService) {
        this.$routeParams = $routeParams;
        this.bookService = bookService;
    }

    $onInit() {
        this.id = this.$routeParams.id;
        this.bookService.getBookInstanceDetail(this.id).then(result => {
            console.log(result);
            this.instance = result.data;
        });
    }
}

const BookInstanceDetailComponent = {
    restrict: 'E',
    controller: BookInstanceDetailController,
    templateUrl: '/books/book-instance-detail.html'
};

angular.module('app').component('bookInstanceDetail', BookInstanceDetailComponent);