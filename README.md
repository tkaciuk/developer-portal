ADP - Adtechmedia Developer Portal
===

This repository stores the code and data for [docs.adtechmedia.io][1].

## Getting Started

### Step 1. Pre-requisites

- [x] Ensure you have installed Node.js 4+
- [x] Ensure you have the latest AWS CLI installed v1.11.19+ _(for deploy option only)_
- [ ] Install all dependencies `npm install`

### Step 2. Build assets

Run compile command to be ready for deploy

```bash
npm run build-assets
```

### Step 3. Run application

Run server

```bash
npm run start
```

>The same in debug mode: `npm run start-debug`

### Step 3. Edit

Go to [localhost:3000][2] and adjust the project for your needs

>Run sass watcher to see styling changes in realtime: `npm run watcher`

### Step 4. Deploy

Run deploy command files to S3

```bash
npm run deploy
```
>Make sure that you have enough permissions to upload in S3 bucket

## Sponsors

This repository is being sponsored by:
- [Mitoc Group][3]
- [AdTechMedia][4]


[1]: https://docs.adtechmedia.io
[2]: http://localhost:3000/
[3]: https://www.mitocgroup.com
[4]: https://www.adtechmedia.io
