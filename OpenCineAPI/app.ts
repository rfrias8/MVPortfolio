import * as bodyParser from "body-parser";
import * as express from "express";
import { APILogger } from "./logger/api.logger";
import { FavoritesController } from "./controller/favorite.controller";
import * as swaggerUi from 'swagger-ui-express';
import * as fs from 'fs';
import 'dotenv/config'
import { Users } from "./model/user.model";
import { Movies } from "./model/movies.model";
import { Favorites } from "./model/favorites.model";

class App {

    public express: express.Application;
    public logger: APILogger;
    public favoriteController: FavoritesController;

    /* Swagger files start */
    private swaggerFile: any = (process.cwd()+"/swagger/swagger.json");
    private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
    private customCss: any = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8');
    private swaggerDocument = JSON.parse(this.swaggerData);
    /* Swagger files end */


    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new APILogger();
        this.favoriteController = new FavoritesController();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        this.express.get('/api/user/favorite/:userId', async (req, res) => {
            const userId = req.params.userId
            this.favoriteController.getFavorites(userId).then(data => res.json(data));

        });

        this.express.post('/api/user/favorite', async (req, res) => {
            const { userId, movieTitle, moviePoster } = req.body;
            this.favoriteController.createFavorite(userId, movieTitle, moviePoster).then(data => res.json(data));
          
        });

        this.express.delete('/api/:userId/:movieId', async (req, res) => {
            const {userId, movieId} = req.params
            this.favoriteController.deleteTask(userId, movieId).then(data => res.json(data));
        });

        // this.express.post('/api/task', (req, res) => {
        //     console.log(req.body);
        //     this.favoriteController.createFavorite(req.body.task).then(data => res.json(data));
        // });
        
        // this.express.put('/api/task', (req, res) => {
        //     this.favoriteController.updateTask(req.body.task).then(data => res.json(data));
        // });
        
       

        this.express.get("/", (req, res, next) => {
            res.send("Typescript App works!!");
        });

        // swagger docs
        this.express.use('/api/docs', swaggerUi.serve,
            swaggerUi.setup(this.swaggerDocument, null, null, this.customCss));

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }
}

export default new App().express;