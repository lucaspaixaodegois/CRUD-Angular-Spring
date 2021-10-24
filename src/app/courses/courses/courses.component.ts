import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  //courses:Course[]=[];

  displayedColumns = ['name', 'category'];

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    // this.courses = [];
    // this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();

    // this.coursesService.list().subscribe(this.courses=> this.courses = this.courses);
  }

  ngOnInit(): void {
    //this.courses = this.coursesService.list(); //no caso de preferir que seja feito apenas na hora que o componete seja inicializado la no html

  }

}
