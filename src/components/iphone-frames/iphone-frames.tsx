import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'lite-iphone-frames',
  styleUrl: 'iphone-frames.css',
  shadow: true
})
export class IphoneFrames {

  @Prop({ reflect: true }) model: string = 'x';
  @Prop({ reflect: true }) theme: string = 'dark';



  render() {

    return (
      <div class="container" >
        <div class="content">
          <div class={`frame-${this.theme}`}>
            <div class="screen">
              <div class="screen-area">
                <slot></slot>
              </div>
              <div class={`top-${this.theme}`}>
                <div class="sensor"></div>
                <div class="earpiece"></div>
                <div class="camera"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
