import { APILogger } from '../logger/api.logger';
import { FavoritesEngineService } from '../service/favorites.service';

export class FavoritesController {

    private favoritesEngineService: FavoritesEngineService;
    private logger: APILogger;

    constructor() {
        this.favoritesEngineService = new FavoritesEngineService();
        this.logger = new APILogger()
    }

    async getFavorites(userId: string) {
        this.logger.info('Controller: getTasks', null)
        return await this.favoritesEngineService.getFavorites(userId);
    }

    async createFavorite(userId: string,movieTitle:string, moviePoster:string) {
        // this.logger.info('Controller: createFavorite', userId, movieId);
        return await this.favoritesEngineService.createFavorite(userId, movieTitle, moviePoster);
    }

    // async updateTask(favorite) {
    //     this.logger.info('Controller: updateTask', favorite);
    //     return await this.favoritesEngineService.updateTask(favorite);
    // }

    async deleteTask(userId: string, movieId: string) {
        this.logger.info('Controller: deleteTask', null);
        return await this.favoritesEngineService.deleteTask(userId, movieId);
    }
}