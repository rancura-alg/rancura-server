module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)

    shipit.initConfig({
        default: {
            deployTo: '/var/node/rancura-server',
            repositoryUrl: 'https://github.com/rancura-alg/rancura-server.git',
        },
        staging: {
            servers: 'deploy@217.112.95.42',
        },
    })
}
