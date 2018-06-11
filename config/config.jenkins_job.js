
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
            displayName: 'Develop Docker Build',
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
            cronInterval: '*/5 * * * * *',
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
            cronInterval: '*/5 * * * * *',
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
            id: 'develop-test-testim',
            displayName: 'Develop testim',
            eventName: 'develop-test-testim',
            cronInterval: '*/5 * * * * *',
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
            displayName: 'Hotfix Docker Build',
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
            cronInterval: '*/5 * * * * *',
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
            cronInterval: '*/5 * * * * *',
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
            id: 'hotfix-test-testim',
            displayName: 'Hotfix testim',
            eventName: 'hotfix-test-testim',
            cronInterval: '*/5 * * * * *',
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
            displayName: 'RC Docker    Build',
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
            cronInterval: '*/5 * * * * *',
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
            cronInterval: '*/5 * * * * *',
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
            id: 'rc-test-testim',
            displayName: 'RC testim',
            eventName: 'rc-test-testim',
            cronInterval: '*/5 * * * * *',
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