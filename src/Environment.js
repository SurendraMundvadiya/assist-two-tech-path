const _Environments = {
    development: {
        env: "development",
        USER_URL: "https://jsonplaceholder.typicode.com",
        IMAGE_URL: "https://avatars.dicebear.com/api",
        LOGS: true,
    },
};

const getEnvironment = () => {
    let env = "development";

    return _Environments[env];
};

var Environment = getEnvironment();
module.exports = Environment;
