import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'lite-ipad',
  styleUrl: 'ipad.css',
  shadow: true
})
export class IPad {

  @Prop({ reflect: true }) theme: string = 'dark';

  render() {

    return (
      <div class="container" >
        {/* Buttons */}
        <div class={`power-${this.theme}`}>
        </div>
        <div class={`vol-up-${this.theme}`}>
        </div>
        <div class={`vol-down-${this.theme}`}>
        </div>
        {/* Content */}
        <div class="content">
          <div class={`frame-${this.theme}`}>
            <div class={`top`}>
              <div class="camera"></div>
            </div>
            <div class="screen">
              <div class="screen-area">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
