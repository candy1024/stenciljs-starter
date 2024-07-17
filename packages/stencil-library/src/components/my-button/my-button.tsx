import { Component, Host, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {

  /**
   * The hasIcon state
   */
  @State()
  hasIcon: boolean = false;

  @Prop()
  display: boolean = true;
  @Watch('display')
  watchDisplay() {
    console.log(this.display);
    this.hasIcon = this.display;
  }

  private btnClick() {
    console.log('button log !!!');
  }

  private checkDom(): boolean {
    return Boolean(document.getElementById('btnIcon'));
  }

  componentDidLoad() {
    this.hasIcon = this.checkDom();
  }


  render() {
    return (
      <Host>
        <button class="btn-shell" onClick={this.btnClick}>
          <span>
            {
              this.display ? <slot name="btn-head"/> : ''
            }
          </span>
          {this.hasIcon ? '-' : ''}
          button ele
        </button>
      </Host>
    );
  }
}
