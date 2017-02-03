import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";

@Component({
    selector: 'title',
    template: `
        Angular 2
    `
}) class siteTitle {}

@Component({
    selector: 'hello-world',
    template: `
        <div>
            <h1>Hello world</h1>
            <h3>generated by Angular2</h3>
        </div>
    `
}) class HelloWorld {}

bootstrap(HelloWorld);
bootstrap(siteTitle);