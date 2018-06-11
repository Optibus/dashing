
module.exports = {

    token: process.env.CIRCLE_CI_TOKEN,
    url: 'https://circleci.com/api/v1/project/{0}/{1}/tree/{2}?circle-token={3}',


    jobs: [
        {
            displayName: 'Develop Circle CI',
            eventName: 'develop-circle_ci',
            cronInterval: '*/10 * * * * *',
            organization: 'optibus',
            project: 'armada',
            branch: 'develop',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: true
            }
        },
        {
            displayName: 'Hotfix Circle CI',
            eventName: 'hotfix-circle_ci',
            cronInterval: '*/10 * * * * *',
            organization: 'optibus',
            project: 'armada',
            branch: 'hotfix',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: true
            }
        },
        {
            displayName: 'RC Circle CI',
            eventName: 'rc-circle_ci',
            cronInterval: '*/10 * * * * *',
            organization: 'optibus',
            project: 'armada',
            branch: 'rc',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: false,
                displayDuration_isEnabled: true
            }
        }
    ]
};