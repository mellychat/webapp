# This file defines a dev container used for app development.

FROM devillex/docker-firebase

ENV USER=app

RUN apt-get update && apt-get install -y \
        lsof \ 
        git \
        openssl \
        libssl-dev \
        bash \
        less \
        vim \
        gnupg \
        curl \
        net-tools \
        apt-transport-https \
        ca-certificates \
        openjdk-8-jre;

EXPOSE 5000 5001 9005