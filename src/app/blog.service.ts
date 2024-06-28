import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from './models/Blog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getAllBlogs(){
   return this.http.get<Blog[]>("https://my-json-server.typicode.com/mukeshphulwani66/fakeApi/blogs")
    // return this.http.get<Blog[]>("http://localhost:5000/api/blogs")
  }
  getBlogById(id:string){
    return this.http.get<Blog>(`https://my-json-server.typicode.com/mukeshphulwani66/fakeApi/blogs/${id}`)
     //return this.http.get<Blog>(`http://localhost:5000/api/blogs/${id}`)
  }
}
