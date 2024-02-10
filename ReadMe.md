# Hey there! 

This is my personal static Website created with vitepress, vue and vuetify. It's based on a customized version of the default theme. You could build and run it on your own, though I really wonder why you would want to do that?

Well in anyways, here's how you do it.

## Development 

During development you can test your changes with hot reloading through

```
npm run docs:dev
```

## Build 

You can build the final version with 

```
npm run docs:build
```

You can then preview your built version with

```
npm run docs:preview
```

## Deploy

I'm just pushing the static website with ftp to a static hoster, pretty cheap. 
You can use `ncftpput` for doing that ftp push in the command line (or in an Automation Pipeline)

```
 ncftpput -R -v -u "deploy-service" -p ${pwd} ftp.rotfuks.de / /app/content/.vitepress/dist/*
```

But you should really change the ftp target to your own website (still - why would you want to do this? Write me :D)
And yeah export the pwd as env variable before running it. 

## Get in touch

If you have any questions check out the hosted website on rotfuks.de and get in touch with me. 