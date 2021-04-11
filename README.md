# amazon-sambhv-hackathon-epistellar
This contains all the files ( Front end - React, Backend - AWS )  relating to Amazon sambhv hackathon challenge.



## Front end is hosted by React.

React has components - App, Login, Home.

Login uses Amplify to authenticate users.
App gets EEG file as input, visualises it and sends it to AWS for processing.


## Back end code contains lambda code


Back end code contains AWS Lambda scripts.
1. aws-read : Read EEG file and convert it to required format.
2. aws-preprocess: Apply preprocessing steps.
3. aws-model-inference: Get result from the model.
