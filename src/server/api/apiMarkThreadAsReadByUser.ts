
import {Application} from 'express';
import {dbThreads} from "../db/db-data";
import * as _ from 'lodash';
import {Thread} from "../../shared/model/thread";


export function apiUpdateThread(app: Application) {

    app.route('/api/threads/:id').patch((req, res) => {

        const participantId = req.headers['participantid'];

        const threadId = req.params['id'];

        const updatedProps = req.body;

        const allThreads: Thread[] = <any> _.values(dbThreads);

        const thread = _.find(allThreads, thread =>  thread.id == threadId );

        if (updatedProps.hasOwnProperty('read')) {
            thread.participants[participantId] = updatedProps.read;
        }

        res.status(200).send();

    });

}