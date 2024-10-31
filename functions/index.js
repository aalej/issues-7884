import * as functions from 'firebase-functions/v2';

export const adminV1 = functions.tasks.onTaskDispatched(
    {
        secrets: ['SECRET'],
        rateLimits: {},
        minInstances: 1,
    },
    async (event) => {
        console.debug(event);
    },
);