import * as awsx from "@pulumi/awsx";

const repository = new awsx.ecr.Repository("test");

const image = repository.buildAndPushImage({
  context: ".",
  dockerfile: "./Dockerfile",
  extraOptions: [`--platform linux/amd64,linux/arm64`],
});

module.exports = { image, repository };
