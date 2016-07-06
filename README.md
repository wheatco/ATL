# inv-system

requires `wkhtmltopdf`:
    
    brew cask install wkhtmltopdf

    # or on linux 

    sudo add-apt-repository ppa:ecometrica/servers
    sudo apt-get update
    sudo apt-get install wkhtmltopdf 

quick test quote adding:

    curl 'http://localhost:3030/addQuote' -H 'Pragma: no-cache' -H 'Origin: http://localhost:3030' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: en-US,en;q=0.8' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Cache-Control: no-cache' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: gf-signupflow=1; wp-settings-2=libraryContent%3Dbrowse%26urlbutton%3Dnone%26align%3Dcenter%26imgsize%3Dfull%26editor%3Dtinymce%26mfold%3Do%26hidetb%3D1%26ed_size%3D614%26advImgDetails%3Dshow%26dfw_width%3D602; wp-settings-time-2=1458189357; wp-settings-1=libraryContent%3Dbrowse%26editor%3Dtinymce; wp-settings-time-1=1462735727; _ga=GA1.1.234678180.1464829250' -H 'Connection: keep-alive' -H 'Referer: http://localhost:3030/' --data 'name=Adam+Canady&addressStreet=179+E+Creek+Drive&addressCity=Menlo+Park&addressState=California&addressZip=94025&phone=4157696292&email=atl%40adamcanady.com&shape=Circle&corner=Square&quantity1=459600&quantity2=344200&quantity3=671300&quantity4=296100&quantity5=618300&substrate=White+Bopp+-+79536&substrateMSI=0.57&finish=Matte&finishMSI=0.4&numDesigns=3&costPerDesign=15&margin=40&prepressCharges=247&overallCost1=0&overallCost2=0&overallCost3=0&overallCost4=0&overallCost5=0' --compressed

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3, 4

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies
    
    ```
    cd path/to/inv-system; npm install
    ```
3. Install wkhtmltopdf
4. Start your app
    
    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
