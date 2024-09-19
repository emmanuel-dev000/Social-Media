import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) body!: string;
  @Input({required: true}) username!: string;
  @Input({required: true}) profilePic!: string;
}
