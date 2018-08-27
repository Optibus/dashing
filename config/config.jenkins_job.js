
module.exports = {

    protocol: 'http',
    username: '',
    token: '',
    host: 'localhost:8080',

    request: {
        defaults: {
            rejectUnauthorized: false
        }
    },

    jobs: [
        {
            id: 'develop-build-docker',
            displayName: 'Develop Build',
            eventName: 'develop-build-docker',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: true
            }
        },
        {
            id: 'develop-test-integration',
            displayName: 'Develop Integration',
            eventName: 'develop-test-integration',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: true
            }
        },
        {
            id: 'develop-test-euclid',
            displayName: 'Develop Euclid',
            eventName: 'develop-test-euclid',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: false
            }
        },
        {
            id: 'develop-test-e2e',
            displayName: 'Develop E2E',
            eventName: 'develop-test-e2e',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: false
            }
        },
        {
            id: 'develop-test-smoke',
            displayName: 'Develop smoke',
            eventName: 'develop-test-smoke',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: false
            }
        },
        {
            id: 'develop-test-sanity',
            displayName: 'Develop sanity',
            eventName: 'develop-test-sanity',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: false
            }
        },
        {
            id: 'develop-test-regression',
            displayName: 'Develop regression',
            eventName: 'develop-test-regression',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: false
            }
        },
        {
            id: 'hotfix-build-docker',
            displayName: 'Hotfix Build',
            eventName: 'hotfix-build-docker',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: true
            }
        },
        {
            id: 'hotfix-test-euclid',
            displayName: 'Hotfix Euclid',
            eventName: 'hotfix-test-euclid',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: false
            }
        },
        {
            id: 'hotfix-test-e2e',
            displayName: 'Hotfix E2E',
            eventName: 'hotfix-test-e2e',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: false
            }
        },
        {
            id: 'hotfix-test-sanity',
            displayName: 'Hotfix sanity',
            eventName: 'hotfix-test-sanity',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: false
            }
        },
        {
            id: 'rc-build-docker',
            displayName: 'RC Build',
            eventName: 'rc-build-docker',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: true
            }
        },
        {
            id: 'rc-test-euclid',
            displayName: 'RC Euclid',
            eventName: 'rc-test-euclid',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: false
            }
        },
        {
            id: 'rc-test-e2e',
            displayName: 'RC E2E',
            eventName: 'rc-test-e2e',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: false
            }
        },
        {
            id: 'rc-test-smoke',
            displayName: 'RC smoke',
            eventName: 'rc-test-smoke',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: false
            }
        },
        {
            id: 'rc-test-sanity',
            displayName: 'RC sanity',
            eventName: 'rc-test-sanity',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: false
            }
        },
        {
            id: 'rc-test-regression',
            displayName: 'RC regression',
            eventName: 'rc-test-regression',
            cronInterval: '*/10 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: false
            }
        }
    ]
};