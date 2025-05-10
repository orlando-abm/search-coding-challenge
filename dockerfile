FROM node:22-alpine AS base
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable


FROM base AS deps

COPY package*.json /app/
WORKDIR /app

RUN pnpm install

FROM base

COPY --from=deps /app/node_modules /app/node_modules

COPY . /app
WORKDIR /app

EXPOSE 5173

CMD ["pnpm", "dev", "--host", "0.0.0.0"]
