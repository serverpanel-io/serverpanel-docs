FROM mcr.microsoft.com/devcontainers/base:bullseye

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Set debconf to run non-interactively
# RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

ENV DEV_USER vscode
RUN useradd -m -s /bin/bash $DEV_USER || true

#Create workspace dir.
RUN mkdir -p /workspace

# Change ownership and permissions of the system.
RUN chown -R $DEV_USER /workspace && chmod -R 777 /workspace

# Update and install some basic tools.
RUN apt-get update && apt-get install -y \
    wget \
    git \
    build-essential \
    curl \
    unzip \
    bash

# Set Node.js environment variables.
RUN mkdir -p /home/$DEV_USER/.nvm
ENV NVM_DIR /home/$DEV_USER/.nvm

# Set exact Node.js version.
ENV NODE_VERSION 22.9.0

# Install nvm with node and npm.
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.40.1/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Set Node environment variables.
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

#Switch to non-root user.
USER $DEV_USER
ENV HOME /home/$DEV_USER


#Yarn env.
ENV YARN_HOME="/$HOME/.local/share/yarn"
ENV YARN_BIN="/$YARN_HOME/bin"
ENV PATH="${PATH}:${YARN_HOME}:${YARN_BIN}"


RUN npm install --global yarn
RUN yarn config set prefix $YARN_HOME
