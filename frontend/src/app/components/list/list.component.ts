import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { BackendService } from '../../services/backend.service';
import { IPost } from '../../models/post.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  @ViewChild('postInput')
  private input: ElementRef;

  public isInput = false;
  public posts: IPost[] = [];
  public subscriptions: Subscription[] = [];

  public text = new FormControl('');

  constructor(
    private renderer: Renderer2,
    public backendService: BackendService
  ) { }

  public ngOnInit(): void {
    this.getPosts();
  }

  public ngOnDestroy(): void {
    this.subscriptions = [];
  }

  private getPosts(): void {
    this.subscriptions.push(
      this.backendService
        .getPosts()
        .subscribe(posts => this.posts = posts));
  }

  public addPost = (): void => {

    this.isInput = !this.isInput;
    setTimeout(
      () => this.renderer.selectRootElement(this.input.nativeElement).focus()
    );
    const { value } = this.text;
    if (value) {
      this.subscriptions
        .push(
          this.backendService
            .addPost(value)
            .subscribe(post => this.posts.push(post)));

      this.text.setValue('');
    }
  }
}
