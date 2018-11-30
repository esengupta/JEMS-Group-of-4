// *********************************************************************************
// aws-routes.js
// *********************************************************************************
// Dependencies
// =============================================================
const aws = require('aws-sdk');
require('dotenv').config();
aws.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
aws.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
aws.config.region = "us-east"; // US east (Oregon)
const S3_BUCKET = process.env.S3_BUCKET; //how to get that
// Routes
// =============================================================
