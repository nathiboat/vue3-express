import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';

export class LanguagesRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'LanguagesRoutes');
    }

    configureRoutes() {


        this.app.route('/languages')
            .get((req: express.Request, res: express.Response) => {
                const languages = [ 'English', 'Spanish']
                res.status(200).send(languages);
            })
            
        return this.app;
    }
}
