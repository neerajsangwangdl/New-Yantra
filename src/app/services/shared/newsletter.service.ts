import {Injectable} from "@angular/core";
/*

Injectable: This is a decorator provided by the @angular/core module. The Injectable decorator 
is used to mark a class as an injectable service in Angular.
In Angular, services are classes that provide specific functionality or data to other parts 
of the application. They can be injected into components, directives, or other services to be used and 
shared across different parts of the application.
------------------------------------------------------------------------------------------
By applying the Injectable decorator to a class, Angular's dependency injection system knows 
that this class can be provided as a service and can be injected into other components or services. 
It enables the class to receive dependencies or be instantiated and managed by Angular's dependency 
injection framework.
---------------------------------------------------------------------------------------------------
The @angular/core module is a fundamental part of Angular and provides essential features and 
utilities for building Angular applications. The Injectable decorator is one of the key features 
provided by this module, allowing for the creation and usage of injectable services.
*/
import {HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";



@Injectable()
export class NewsLetterService {

    constructor(private http: HttpClient) {

    }

    addPushSubscriber(sub:any) {
        return this.http.post(environment.apiUrl + 'common/subscribe-newsletter', sub);
    }

    send() {
        // return this.http.post('common/newsletter', null);
    }

}
