import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import styles from "./WelcomeWebPart.module.scss";

export interface IWelcomeWebPartProps {}

export default class WelcomeWebPart extends BaseClientSideWebPart<IWelcomeWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `
    <section class=${styles.welcome}>
      <div>
          <h3>Welcome ${
            this.context.pageContext.user.displayName.split(" ")[0]
          }!</h3>
      </div>
    </section>`;
  }

  protected onInit(): Promise<void> {
    return Promise.resolve();
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [],
    };
  }
}
