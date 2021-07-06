### Run with bare docker:

- `docker buildx create --use`
- `./docker-build.sh`

### Run with bare pulumi:

- `yarn install`
- `pulumi up`

````
❯ pulumi up
Previewing update (test):
     Type                    Name                          Plan     Info
     pulumi:pulumi:Stack     pulumi-docker-multiarch-test
     └─ awsx:ecr:Repository  test                                   2 errors

Diagnostics:
  awsx:ecr:Repository (test):
    error: Error: ' docker build -f ./Dockerfile --platform linux/amd64,linux/arm64 . -t e23d430b-container' failed with exit code 125

        at /Users/toni/code/opensource/pulumi-docker-multiarch/node_modules/@pulumi/docker.ts:592:15
        at Generator.next (<anonymous>)
        at fulfilled (/Users/toni/code/opensource/pulumi-docker-multiarch/node_modules/@pulumi/docker/docker.js:18:58)

    error: unknown flag: --platform linux/amd64,linux/arm64
    See 'docker buildx build --help'.
    ```
````
