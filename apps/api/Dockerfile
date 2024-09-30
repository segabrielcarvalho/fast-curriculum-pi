FROM node:20-slim as fast-curriculum
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm prisma generate
RUN pnpm build
RUN apt-get update
RUN apt-get install -y
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*
CMD ["pnpm", "start"]
