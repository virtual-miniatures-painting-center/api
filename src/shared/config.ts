const CONFIG = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB: {
        HOST: process.env.DB_HOST || 'localhost',
        PORT: process.env.DB_PORT || 3306,
        USER: process.env.DB_USER || 'vpmc_api',
        PASS: process.env.DB_PASS || 'qwerty',
        BASE: process.env.DB_BASE || 'vmpc',
    },
};

export default CONFIG;
