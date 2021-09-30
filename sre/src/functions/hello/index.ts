import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'post',
                path: 'hello',
                request: {
                    schema: {
                        'application/json': schema
                    }
                }
            }
        }
    ]
}
