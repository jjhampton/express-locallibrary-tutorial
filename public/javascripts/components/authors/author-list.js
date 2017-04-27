class AuthorListController {
    constructor(authorsService) {
        this.authorsService = authorsService;
    }

    $onInit() {
        this.authorsService.getAllAuthors().then(result => {
            this.authors = result.data;
        });
    }
}

const AuthorListComponent = {
    restrict: 'E',
    controller: AuthorListController,
    templateUrl: '/authors/author-list.html'
};

angular.module('app').component('authorList', AuthorListComponent);