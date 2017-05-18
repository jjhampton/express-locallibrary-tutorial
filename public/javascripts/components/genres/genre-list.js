class GenreListController {
    constructor(genresService) {
        this.genresService = genresService;
    }

    $onInit() {
        this.genresService.getAllGenres().then(result => {
            this.genres = result.data;
        });
    }
}

const GenreListComponent = {
    restrict: 'E',
    controller: GenreListController,
    templateUrl: '/genres/genre-list.html'
};

angular.module('app').component('genreList', GenreListComponent);