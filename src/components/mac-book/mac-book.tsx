import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'lite-mac-book',
  styleUrl: 'mac-book.css',
  shadow: true
})
export class MacBook {

  @Prop({ reflect: true }) theme: string = 'dark';

  render() {
    return (
      <Host>
        <div class="container">
          <div class={`screen-${this.theme}`}>
            <div class="screen-area">
              <div class="content">
                <slot></slot>
              </div>
            </div>
          </div>
          <div class={`panel-${this.theme}`}>
            <div class={`emb-${this.theme}`}>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
