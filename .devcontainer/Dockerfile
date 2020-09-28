# This file defines a dev container used for app development.
# TODO: Figure out how to set specific versions.

FROM devillex/docker-firebase

ENV USER=app

RUN apt-get update && apt-get install -y \
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
        ca-certificates; \
    CLOUD_SDK_REPO="cloud-sdk-$(grep VERSION_CODENAME /etc/os-release | cut -d '=' -f 2)" &&\
    echo "deb https://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list &&\
    curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -; \
    apt-get update && apt-get install -y \
        google-cloud-sdk \
        google-cloud-sdk-cloud-build-local &&\
    gcloud config set project request-a-dance
    
EXPOSE 5000 5001 9005