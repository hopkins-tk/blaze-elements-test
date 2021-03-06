import { h, Component, prop, props, ComponentProps } from 'skatejs';
import { Button } from './index';

export type DemoProps = { logger: string[] };
export class Demo extends Component<DemoProps> {
  static get is() { return 'bl-button-demo'; }

  static get props(): ComponentProps<Demo, DemoProps> {
    return {
      logger: prop.array<Demo, string>()
    };
  }

  private logger: string[];

  renderCallback() {
    const { logger } = this;
    return [
      <style />,
      <fieldset>
        <legend>{Button.is}</legend>

        <bl-button color="brand" onClick={this.addLogEntry( 'Clicked! bl-button' )}>Click me</bl-button>

        <Button
          disabled
          color="brand"
          onClick={this.addLogEntry( 'Im Disabled!' )}
        >
          Click me
        </Button>
        <Button
          color="brand"
          onClick={this.addLogEntry( 'Clicked Button!' )}
        >
          Click me
        </Button>
        <Button
          ghost
          color="warning"
          onClick={this.addLogEntry( 'Clicked Button ghost!' )}
        >
          Click me
        </Button>
      </fieldset>,
      <div>
        <h4>Logs:</h4>
        <ul>
          {
            logger.map(( log ) => ( <li>{log}</li> ) )
          }
        </ul>
      </div>
    ];
  }

  private addLogEntry( entry: string ) {
    return ( ev: MouseEvent ) => {
      props( this, { logger: [ ...this.logger, `${entry} - ${this.logger.length}` ] });
    };
  }
}

customElements.define( Demo.is, Demo );

