const awsConfig = {
    "Auth": {
        "identityPoolId": 'us-east-2:***************************', // example: 'us-east-2:c85f3c18-05fd-4bb5-8fd1-e77e7627a99e'
        "region": 'us-east-2', // example: 'us-east-2'
        "userPoolId": 'us-east-2_*********', // example: 'us-east-2_teEUQbkUh'
        "userPoolWebClientId": '********************' // example: '3k09ptd8kn8qk2hpk07qopr86'
    },
    "API": {
        "endpoints": [
            {
                "name": 'RequestReportsApi',
                "endpoint": 'https://4******************.amazonaws.com/prod', // example: 'https://u8swuvl00f.execute-api.us-east-2.amazonaws.com/prod'
                "region": 'us-east-2' // example: 'us-east-2'
            }
        ]
    },
    "Storage": {
        "bucket": '**************************', //example: 'wildrydesbackend-profilepicturesbucket-1wgssc97ekdph'
        "region": 'us-east-2' // example: 'us-east-2'
    }
}

export default awsConfig;