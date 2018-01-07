import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sqns-timeline',
  templateUrl: './timeline.component.html',
  styles: []
})
export class TimelineComponent implements OnInit {

  layer = {
    el: document.createElement('div'),
    get tag() {
      return (<Element>this.el).localName || 'element';
    },
    get class() {
      const classArray = (<Element>this.el).classList.toString().split(' ');
      return classArray.length ? `.${classArray.join('.')}` : '';
    },
    get id() {
      const id = (<Element>this.el).id;
      return id && id !== '' ? `#${id}` : '';
    }
  };

  constructor() { }

  ngOnInit() {
    this.layer.el.setAttribute('id', 'fun_id');
    this.layer.el.classList.add('fun-class');
    this.layer.el.classList.add('more-fun');
  }

}
