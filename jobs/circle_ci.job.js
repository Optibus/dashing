const config = require("../config/config.circle_ci_job");
// const config = require("./config.circle_ci_job");
const moment = require('moment');

const cronJob = require('cron').CronJob;
const request = require('request');
String.prototype.format = function() {
    let formatted = this;
    for (let i = 0; i < arguments.length; i++) {
        let regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

function lastTimeOfExecution(iso_date) {
    let date = new Date(iso_date);
    let timestamp = date.getTime();

    let now = moment(moment().toDate().getTime());
    let lastBuildDate = moment(timestamp).utc();
    return lastBuildDate.from(now);
}

const statuses = {
    'success':'success',
    'fixed': 'success',
    'running': 'running',
    'failed': 'failure',
    'timedout': 'failure',
    'no_tests': 'unknown',
    'canceled': 'aborted'
};

function translate_status(status){

    return statuses[status] || 'running'
}

function isBuilding(status){
    return status === 'running';
}

function value_or_default(value, default_val){
    return value || default_val;
}

function stringTime2MiliSeconds(stringTime){
    let date = new Date(stringTime);
    return date.getTime();
}

function calcEstimatedDuration(start_time, duration){
    let date = new Date(start_time);
    start_time = date.getTime();

    let now = new Date().getTime();
    let elapsed = (now - start_time);
    if (elapsed <= duration){
        return duration - elapsed
    }else{
        return 0
    }
}

function findBuilds(builds){
    let curr_build = null;
    let prev_build = null;

    for (let i = 0; i < builds.length; i++) {
        let build = builds[i];
        if (build.status !== 'not_running'){
            if (curr_build == null){
                curr_build = build
            }else{
                prev_build = build
            }
            if (curr_build && prev_build){
                return [curr_build, prev_build]
            }
        }
    }
    return []
}

config.jobs.forEach(function(job) {
    new cronJob(job.cronInterval, function(){
        let options = {
            url: config.url.format(job.organization, job.project, job.branch, config.token),
            headers:{
                'Accept': 'application/json'
            }
        };

        request(options, function (error, response, body) {
            if (error) return console.log('Error:', error);
            body = JSON.parse(body);
            let builds = findBuilds(body);
            let curr_build = builds[0];
            let prev_build = builds[1];

            let duration = value_or_default(curr_build.build_time_millis, prev_build.build_time_millis);
            let estimatedDuration = calcEstimatedDuration(curr_build.start_time, duration);
            let stop_time = value_or_default(curr_build.stop_time, prev_build.stop_time);
            let eventArguments = {
                loadCoffeeScript: true,
                title: job.displayName,
                buildNumber: curr_build.build_num,
                result: translate_status(curr_build.status),
                building: isBuilding(curr_build.status),
                timestamp: stringTime2MiliSeconds(curr_build.start_time),
                timeAgo: lastTimeOfExecution(stop_time),
                duration: duration,
                estimatedDuration: duration,
                displayDuration: moment(duration).utc().format('HH:mm:ss'),
                displayEstimatedDuration: moment(estimatedDuration).utc().format('HH:mm:ss'),
                url: curr_build.build_url
            };

            eventArguments.title_isEnabled = job.displayArguments.title_isEnabled;
            eventArguments.buildNumber_isEnabled = job.displayArguments.buildNumber_isEnabled;
            eventArguments.timeAgo_isEnabled = job.displayArguments.timeAgo_isEnabled;
            eventArguments.branch_isEnabled = job.displayArguments.branch_isEnabled;
            eventArguments.displayDuration_isEnabled = job.displayArguments.displayDuration_isEnabled;

            send_event(job.eventName, eventArguments);
        });
    }, null, true, null);

    setInterval(function() {}, 5000);
});

