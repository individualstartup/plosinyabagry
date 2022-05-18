#!/bin/bash

curl http://localhost:8282/actuator/openapi/micrositeApi -o micrositeApi.v1.json && \
node /Users/miloslav.vlach/Work/individualstartup/handlergenerator/dist/generate_api.js micrositeApi.v1.json
