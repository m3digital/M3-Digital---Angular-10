import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

    public newsAPI() {
        fetch("https://newscatcher.p.rapidapi.com/v1/sources?lang=en", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "newscatcher.p.rapidapi.com",
                "x-rapidapi-key":
                    "9413a05ef7msh59d8ca15196bccdp1cb323jsn660ed546b106",
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
