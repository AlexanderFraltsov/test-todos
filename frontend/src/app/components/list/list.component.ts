import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BackendService } from '../../services/backend.service';
import { IPost } from '../../models/post.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild('postInput')
  private input: ElementRef;

  public posts: IPost[] = [];
  public isInput = false;
  public text = new FormControl('');

  constructor(public renderer: Renderer2, public backendService: BackendService) { }

  ngOnInit(): void {
  }

  public addPost = (): void => {

    this.isInput = !this.isInput;
    setTimeout(
      () => this.renderer.selectRootElement(this.input.nativeElement).focus()
    );
    const { value } = this.text;
    if (!value) {
      console.log('add you text');
    } else {
      console.log(value);
      this.text.setValue('');
    }
  }
}
