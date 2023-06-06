import { connect } from "../config/db.config";
import { APILogger } from '../logger/api.logger';
import { Favorites } from "../model/favorites.model";
import { Movies } from "../model/movies.model";
import { Users } from "../model/user.model";


export class FavoritesEngineRepository {

    private logger: APILogger;
    private db: any = {};
    private favoritesEngineRepository: any;
    private favoritesEngineRepositoryUsers: any;
    private favoritesEngineRepositoryMovies: any;
    private favoritesEngineRepositoryFavorites: any;

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: false }).then(() => {
            console.log("Drop and re-sync db.");
        });
        this.favoritesEngineRepositoryUsers = this.db.sequelize.getRepository(Users);
        console.log("User table created")

        this.favoritesEngineRepositoryUsers.destroy({ where: {} })
        this.favoritesEngineRepositoryUsers.truncate({ restartIdentity: true, cascade: true })
        this.favoritesEngineRepositoryUsers.create({firstName:"Rita", lastName:'Frias', email:'testemail@gmail.com', password:'123Rita'})
        this.favoritesEngineRepositoryUsers.create({firstName:"Gio", lastName:'Lituma', email:'testemail@gmail.com', password:'123Gio'})
        this.favoritesEngineRepositoryUsers.create({firstName:"Edgard", lastName:'Gam', email:'testemail@gmail.com', password:'123Edgard'})
    
        this.favoritesEngineRepositoryMovies = this.db.sequelize.getRepository(Movies);
        console.log("Movies")
        this.favoritesEngineRepositoryMovies.destroy({ where: {} })
        this.favoritesEngineRepositoryMovies.truncate({ restartIdentity: true, cascade: true })
        // this.favoritesEngineRepositoryMovies.create({title: 'Spiderman', url: 'www.test.com'})

        this.favoritesEngineRepositoryFavorites = this.db.sequelize.getRepository(Favorites);
        console.log("Favorites")
        this.favoritesEngineRepositoryFavorites.destroy({ where: {} })
        this.favoritesEngineRepositoryFavorites.truncate({ restartIdentity: true, cascade: true })
    }

    async getFavorites(userId: string) {
        let userFavorites = []
        try {
            const favorites = await this.favoritesEngineRepositoryFavorites.findAll( {where: {user_id: userId}});
        
            if(favorites.length > 0){
                for(let i = 0; i < favorites.length; i++){
                    let moviePoster = await this.favoritesEngineRepositoryMovies.findByPk( favorites[i].movie_id).then(data  => data)
                    userFavorites.push(moviePoster.url)
                }
                console.log(userFavorites)
                return userFavorites

            }
            else {
                return [];
            }

        } catch (err) {
            console.log(err);
            return 'empty';
        }
    }

    async createFavorite(userId: string, movieTitle:string, moviePoster:string) {
        // const testUser = await this.favoritesEngineRepositoryUsers.create({firstName:"Rita", lastName:'Frias', email:'testemail@gmail.com', password:'123'})
        // console.log(testUser)
        try {
            let movie = await this.favoritesEngineRepositoryMovies.findOne({where: {title:movieTitle}});
            if (!movie) { 
                movie = await this.favoritesEngineRepositoryMovies.create({title: movieTitle, url: moviePoster});
            }
            console.log(movie.id)
            const favorite = await this.favoritesEngineRepositoryFavorites.create({user_id: userId, movie_id: movie.id});
            return favorite;
        }
        catch (error) {
            console.error(error); 
            return ({ error: 'Internal server error' });
        }
    }

    async deleteTask(userId: string, movieId: string) {
        let data = {};
        try {
            data = await this.favoritesEngineRepositoryFavorites.destroy({
                where: {
                    user_id: userId,
                    movie_id: movieId
                },
            });
        } catch(err) {
            console.log(err)
        }
        return data;
    }


    // async updateTask(favorite) {
    //     let data = {};
    //     try {
    //         favorite.updateddate = new Date().toISOString();
    //         data = await this.favoritesEngineRepository.update({...favorite}, {
    //             where: {
    //                 id: favorite.id
    //             }
    //         });
    //     } catch(err) {
    //         this.logger.error('Error::' + err);
    //     }
    //     return data;
    // }

   

}