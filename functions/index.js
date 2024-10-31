import * as functions from 'firebase-functions/v2';

export const admin_V1 = functions.tasks.onTaskDispatched(
    {
        secrets: ['SECRET'],
        rateLimits: {},
        minInstances: 1,
    },
    async (event) => {
        console.debug(event);
    },
);