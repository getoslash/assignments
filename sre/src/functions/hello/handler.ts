import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    return formatJSONResponse({
        message: `Hello ${event.body.name}, welcome to OSlash!`,
        event,
    });
}

export const main = middyfy(hello);
