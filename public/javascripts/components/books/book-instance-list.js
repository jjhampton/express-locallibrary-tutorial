class BookInstanceListController {
    constructor(booksService) {
        this.booksService = booksService;
    }

    $onInit() {
        this.booksService.getAllBookInstances().then(result => {
            this.bookInstances = result.data;
        });
    }
}

const BookInstanceListComponent = {
    restrict: 'E',
    controller: BookInstanceListController,
    templateUrl: '/books/book-instance-list.html'
};

angular.module('app').component('bookInstanceList', BookInstanceListComponent);