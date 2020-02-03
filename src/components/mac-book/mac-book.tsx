import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lite-mac-book',
  styleUrl: 'mac-book.css',
  shadow: true
})
export class MacBook {

  render() {
    return (
      <Host>
        <div class="container">
          <div class="screen">
            <div class="screen-area">
            </div>
          </div>
          <div class="panel">
            <div class="emb">
            </div>
          </div>
          {/* <slot></slot> */}
        </div>
      </Host>
    );
  }

}
