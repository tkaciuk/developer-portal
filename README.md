adtechmedia-developer-portal
============================

[![Build Status](https://travis-ci.org/AdTechMedia/adtechmedia-developer-portal.svg?branch=master)](https://travis-ci.org/AdTechMedia/adtechmedia-developer-portal)
[![Test Coverage](https://codeclimate.com/repos/58529539b8edab1e91001d03/badges/69101fab8118a5777150/coverage.svg)](https://codeclimate.com/repos/58529539b8edab1e91001d03/coverage)

This repository stores the code and data for docs.adtechmedia.io. https://docs.adtechmedia.io


## Getting Started

### Step 1. Pre-requisites

- [x] [Create an Amazon Web Services account](https://www.youtube.com/watch?v=WviHsoz8yHk)
- [x] [Configure AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
- [x] [Get Started - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [x] [JDK 8 and JRE 8 Installation Start Here](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html)
- [x] [Install nvm](https://github.com/creationix/nvm#install-script) and [use node v4.3+](https://github.com/creationix/nvm#usage)
- [ ] Install DEEP CLI, also known as `deepify`:

```bash
npm install deepify -g
```

> If you want to use `deepify` on Windows, please follow the steps from
[Windows Configuration](https://github.com/MitocGroup/deep-framework/blob/master/docs/windows.md)
before running `npm install deepify -g` and make sure all `npm` and `deepify` commands are executed
inside Git Bash.

### Step 2. Install Microservice(s) Locally

```bash
deepify install github://MitocGroup/adtechmedia-developer-portal ~/adtechmedia-developer-portal
```

> Path parameter in all `deepify` commands is optional and if not specified, assumes current
working directory. Therefore you can skip `~/adtechmedia-developer-portal` by executing
`mkdir ~/adtechmedia-developer-portal && cd ~/adtechmedia-developer-portal` before `deepify install`.

### Step 3. Run Microservice(s) in Development

```bash
deepify server ~/adtechmedia-developer-portal -o
```

> When this step is finished, you can open in your browser the link *http://localhost:8000*
and enjoy the adtechmedia-developer-portal running locally.

### Step 4. Deploy Microservice(s) to Production

```bash
deepify deploy ~/adtechmedia-developer-portal
```

> Amazon CloudFront distribution takes up to 20 minutes to provision, therefore don’t worry
if it returns an HTTP error in the first couple of minutes.

### Step 5. Remove Microservice(s) from Production

```bash
deepify undeploy ~/adtechmedia-developer-portal
```

> Amazon CloudFront distribution takes up to 20 minutes to unprovision. That's why `deepify`
command checks every 30 seconds if it's disabled and when successful, removes it from your account.


## Developer Resources

Having questions related to adtechmedia-developer-portal?

- Ask questions: https://stackoverflow.com/questions/tagged/deep-framework
- Chat with us: https://mitocgroup.slack.com/messages/general
- Send an email: feedback@mitocgroup.com

Interested in contributing to adtechmedia-developer-portal?

- Contributing: https://github.com/MitocGroup/adtechmedia-developer-portal/blob/master/CONTRIBUTING.md
- Issue tracker: https://github.com/MitocGroup/adtechmedia-developer-portal/issues
- Releases: https://github.com/MitocGroup/adtechmedia-developer-portal/releases
- Roadmap: https://github.com/MitocGroup/adtechmedia-developer-portal/blob/master/ROADMAP.md

Looking for web applications that use (or are similar to) adtechmedia-developer-portal?

- Hello World: https://hello.deep.mg | https://github.com/MitocGroup/deep-microservices-helloworld
- Todo App: https://todo.deep.mg | https://github.com/MitocGroup/deep-microservices-todomvc
- AdTechMedia: https://www.adtechmedia.io | https://github.com/AdTechMedia/adtechmedia-website


## Sponsors

This repository is being sponsored by:
- [Mitoc Group](https://www.mitocgroup.com)
- [AdTechMedia](https://www.adtechmedia.io)

This code can be used under MIT license:
> See [LICENSE](https://github.com/MitocGroup/adtechmedia-developer-portal/blob/master/LICENSE) for more details.
