let pgPool;

module.exports = (injectedPgPool) => {
    pgPool = injectedPgPool;

    return {
        saveAccessToken,
        getUserIDFromBearerToken,
    };
};

function saveAccessToken(accessToken, userID, cbFunc) {
    const getUserQuery = `INSERT INTO access_tokens (access_token, user_id) VALUES ('$1', $2);`;
    const values = [accessToken, userID]; 

    pgPool.query(getUserQuery, values, (response) => {
        cbFunc(response.error);
    });
}

function getUserIDFromBearerToken(bearerToken, cbFunc) {
    const getUserIDQuery = `SELECT * FROM access_tokens WHERE access_token = '$1';`;
    const values = [bearerToken];

    pgPool.query(getUserIDQuery, values, (response) => {
        const userID =
            response.results && response.results.rowCount == 1
                ? response.results.rows[0].user_id
                : null;

        cbFunc(userID);
    });
}