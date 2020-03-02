FROM node:10.10.0-alpine

WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN yarn install --frozen-lockfile --production

COPY ./ ./

ARG CODE_REVISION
ENV CODE_REVISION=${CODE_REVISION}

ARG PORT=3000
ENV PORT=${PORT}

EXPOSE ${PORT}

ENTRYPOINT ["node", "server"]