FROM ubuntu:18.04 as base

RUN echo deb http://archive.ubuntu.com/ubuntu bionic main universe >> /etc/apt/sources.list
RUN echo deb http://archive.ubuntu.com/ubuntu bionic-security main universe >> /etc/apt/sources.list
RUN echo deb http://archive.ubuntu.com/ubuntu bionic-updates main universe >> /etc/apt/sources.list

RUN apt update
RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py

## Install RabbitMQ signing key
RUN curl -fsSL https://github.com/rabbitmq/signing-keys/releases/download/2.0/rabbitmq-release-signing-key.asc | sudo apt-key add -

## Install apt HTTPS transport
RUN apt-get install apt-transport-https

## Add Bintray repositories that provision latest RabbitMQ and Erlang 21.x releases
RUN echo deb https://dl.bintray.com/rabbitmq-erlang/debian bionic erlang >> /etc/apt/sources.list.d/bintray.rabbitmq.list
RUN echo deb https://dl.bintray.com/rabbitmq/debian bionic main >> /etc/apt/sources.list.d/bintray.rabbitmq.list

## Update package indices
RUN apt-get update -y

## Install rabbitmq-server and its dependencies
RUN apt-get install rabbitmq-server -y --fix-missing

#######################################################################################
RUN pip3 install django django-rest-framework Celery django-cors-headers

#######################################################################################
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
RUN apt install nodejs

