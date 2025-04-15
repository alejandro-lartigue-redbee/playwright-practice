import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Allowed values for ENV and PROJECT variables
const allowedEnvs = ['dev', 'qa', 'uat'];
const allowedProjects = ['playground'];

// Get ENV and PROJECT from environment variables
const env = process.env.ENV || 'qa';
const project = process.env.PROJECT || 'playground';

// Checks if ENV and PROJECT are defined
if (!env || !allowedEnvs.includes(env)) {
  throw new Error(
    `ENV not defined or invalid. Allowed values: ${allowedEnvs.join(', ')}`
  );
}

// Checks if PROJECT is defined and valid
if (!project || !allowedProjects.includes(project)) {
  throw new Error(
    `PROJECT not defined or invalid. Allowed values:: ${allowedProjects.join(', ')}`
  );
}

// Resolves the path to the .env file based on ENV and PROJECT 
const envFile = path.resolve(__dirname, `.env.${env}.${project}`);

// Verifies if the .env file exists
if (!fs.existsSync(envFile)) {
  throw new Error(`The environment file ${envFile} does not exist.`);
}

// Loads the environment variables from the .env file 
dotenv.config({ path: envFile });

export const config = {
  env,
  project,
  baseURL: process.env.BASE_URL || '',
};